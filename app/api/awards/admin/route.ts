import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Award from "@/models/Award";
import cloudinary from "@/lib/cloudinary";
import { verifyAdmin } from "@/lib/auth";
// ✅ Slugify import - Types already included
import slugify from "slugify";

// ============================================
// ✅ POST - Create Award (Admin)
// ============================================
export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Award upload request received');

    const authResult = await verifyAdmin(request);
    if (!authResult.success) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const formData = await request.formData();
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const year = formData.get('year') as string;
    const image = formData.get('image') as File;

    if (!title || !description || !year || !image) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // ✅ Slug generate karo
    const slug = slugify(title, { lower: true, strict: true });

    const existingAward = await Award.findOne({ slug });
    if (existingAward) {
      return NextResponse.json(
        { success: false, message: 'Award with this title already exists' },
        { status: 400 }
      );
    }

    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(image.type)) {
      return NextResponse.json(
        { success: false, message: 'Invalid file type' },
        { status: 400 }
      );
    }

    if (image.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: 'File size should be less than 5MB' },
        { status: 400 }
      );
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log('☁️ Uploading to Cloudinary...');
    const uploadResult: any = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: 'doctor-portfolio/awards',
          transformation: [
            { width: 800, height: 600, crop: 'limit' },
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

    console.log('💾 Saving to database...');

    const award = await Award.create({
      title,
      slug,
      description,
      year,
      image: uploadResult.secure_url,
      cloudinaryId: uploadResult.public_id,
    });

    console.log('✅ Award saved! ID:', award._id);

    return NextResponse.json({
      success: true,
      message: 'Award created successfully',
      data: award,
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
// 🗑️ DELETE - Delete Award (Admin)
// ============================================
export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    
    console.log('🗑️ DELETE award ID:', id);

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Award ID is required' },
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

    const award = await Award.findById(id);
    if (!award) {
      return NextResponse.json(
        { success: false, message: 'Award not found' },
        { status: 404 }
      );
    }

    if (award.cloudinaryId) {
      try {
        await cloudinary.uploader.destroy(award.cloudinaryId);
        console.log('✅ Cloudinary deleted');
      } catch (cloudinaryError) {
        console.error('⚠️ Cloudinary delete error:', cloudinaryError);
      }
    }

    await award.deleteOne();
    console.log('✅ Award deleted from database');

    return NextResponse.json({
      success: true,
      message: 'Award deleted successfully',
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
// 📝 PUT - Update Award (Admin)
// ============================================
export async function PUT(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    
    console.log('✏️ PUT award ID:', id);

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Award ID is required' },
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

    const award = await Award.findById(id);
    if (!award) {
      return NextResponse.json(
        { success: false, message: 'Award not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { title, description, year } = body;

    if (title) {
      award.title = title;
      award.slug = slugify(title, { lower: true, strict: true });
    }
    if (description) award.description = description;
    if (year) award.year = year;

    await award.save();

    return NextResponse.json({
      success: true,
      message: 'Award updated successfully',
      data: award,
    });

  } catch (error: any) {
    console.error('❌ Update error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Update failed' },
      { status: 500 }
    );
  }
}