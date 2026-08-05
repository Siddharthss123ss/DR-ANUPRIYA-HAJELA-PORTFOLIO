import { NextRequest, NextResponse } from "next/server";
import { connectDB } from '@/lib/mongodb';
import Gallery from '@/models/Gallery';
import cloudinary from '@/lib/cloudinary';
import { verifyAdmin } from '@/lib/auth';

// ============================================
// ✅ POST - Upload Image
// ============================================
export async function POST(request: NextRequest) {
  try {
    console.log('🚀 1. Upload request received');

    // Auth check
    const authResult = await verifyAdmin(request);
    if (!authResult.success) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    console.log('✅ 2. Auth passed');

    // DB connect
    await connectDB();
    console.log('✅ 3. DB connected');

    // Form data parse
    const formData = await request.formData();
    const file = formData.get('image') as File;
    const title = formData.get('title') as string || 'Untitled';
    const description = formData.get('description') as string || '';
    const category = formData.get('category') as string || 'other';
    const isFeatured = formData.get('isFeatured') === 'true';

    console.log('📝 4. Form data:', { title, description, category, isFeatured });

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'No image provided' },
        { status: 400 }
      );
    }
    console.log('📁 5. File received:', file.name, file.size);

    // File type validate
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, message: 'Invalid file type' },
        { status: 400 }
      );
    }

    // File size check (5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: 'File size should be less than 5MB' },
        { status: 400 }
      );
    }

    // Cloudinary upload
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log('☁️ 6. Uploading to Cloudinary...');
    const uploadResult: any = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: 'doctor-portfolio/gallery',
          transformation: [
            { width: 1200, height: 800, crop: 'limit' },
            { quality: 'auto' },
          ],
        },
        (error, result) => {
          if (error) {
            console.error('❌ Cloudinary error:', error);
            reject(error);
          } else {
            console.log('✅ Cloudinary success:', result?.secure_url);
            resolve(result);
          }
        }
      ).end(buffer);
    });

    console.log('💾 7. Saving to database...');
    
    // Database save
    const newImage = await Gallery.create({
      title,
      description,
      imageUrl: uploadResult.secure_url,
      cloudinaryId: uploadResult.public_id,
      category,
      isFeatured,
      uploadedBy: authResult.user?.email || 'Admin',
    });

    console.log('✅ 8. Database save success! ID:', newImage._id);

    return NextResponse.json({
      success: true,
      message: 'Upload successful',
      data: newImage,
    }, { status: 201 });

  } catch (error: any) {
    console.error('❌ Upload error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Upload failed' },
      { status: 500 }
    );
  }
}

// ============================================
// 🗑️ DELETE - Delete Image (by ID in query params)
// ============================================
export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    
    console.log('🗑️ DELETE request for ID:', id);

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Image ID is required' },
        { status: 400 }
      );
    }

    const authResult = await verifyAdmin(request);
    if (!authResult.success) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    console.log('✅ Auth passed');

    await connectDB();
    console.log('✅ DB connected');

    const image = await Gallery.findById(id);
    if (!image) {
      console.log('❌ Image not found:', id);
      return NextResponse.json(
        { success: false, message: 'Image not found' },
        { status: 404 }
      );
    }
    console.log('✅ Image found:', image.title);

    if (image.cloudinaryId) {
      try {
        const result = await cloudinary.uploader.destroy(image.cloudinaryId);
        console.log('✅ Cloudinary deleted:', result);
      } catch (cloudinaryError) {
        console.error('⚠️ Cloudinary delete error:', cloudinaryError);
      }
    }

    await image.deleteOne();
    console.log('✅ Database deleted');

    return NextResponse.json({
      success: true,
      message: 'Image deleted successfully',
    });

  } catch (error: any) {
    console.error('❌ Delete error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Delete failed' },
      { status: 500 }
    );
  }
}

// ============================================
// 📝 PUT - Update Image (FIXED)
// ============================================
export async function PUT(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    
    console.log('✏️ PUT request for ID:', id);

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Image ID is required' },
        { status: 400 }
      );
    }

    const authResult = await verifyAdmin(request);
    if (!authResult.success) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const image = await Gallery.findById(id);
    if (!image) {
      return NextResponse.json(
        { success: false, message: 'Image not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    console.log('📝 Update body:', body);

    // ✅ Sirf jo fields aayi hain unko update karo
    let isUpdated = false;
    
    if (body.isFeatured !== undefined) {
      image.isFeatured = body.isFeatured;
      isUpdated = true;
    }
    
    if (body.title !== undefined && body.title.trim() !== '') {
      image.title = body.title.trim();
      isUpdated = true;
    }
    
    if (body.description !== undefined) {
      image.description = body.description.trim();
      isUpdated = true;
    }
    
    if (body.category !== undefined && body.category !== '') {
      image.category = body.category;
      isUpdated = true;
    }

    if (!isUpdated) {
      return NextResponse.json(
        { success: false, message: 'No valid fields to update' },
        { status: 400 }
      );
    }

    // ✅ Save with validation
    await image.save();

    console.log('✅ Image updated successfully:', image._id);

    return NextResponse.json({
      success: true,
      message: 'Image updated successfully',
      data: image,
    });

  } catch (error: any) {
    console.error('❌ Update error:', error);
    
    // ✅ Better error message for validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((e: any) => e.message);
      return NextResponse.json(
        { success: false, message: `Validation error: ${errors.join(', ')}` },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: error.message || 'Update failed' },
      { status: 500 }
    );
  }
}

// ============================================
// 📋 GET - Get All Images
// ============================================
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const url = new URL(request.url);
    const featured = url.searchParams.get('featured');
    const category = url.searchParams.get('category');
    
    const filter: any = {};
    if (featured === 'true') filter.isFeatured = true;
    if (category && category !== 'all') filter.category = category;

    const images = await Gallery.find(filter).sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      data: images,
    });
  } catch (error: any) {
    console.error('❌ GET error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to fetch images' },
      { status: 500 }
    );
  }
}