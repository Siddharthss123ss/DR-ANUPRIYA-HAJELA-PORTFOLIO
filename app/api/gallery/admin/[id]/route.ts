// app/api/admin/gallery/[id]/route.ts
import { NextRequest, NextResponse } from "next/server"; // ✅ NextRequest import karo
import { connectDB } from '@/lib/mongodb';
import Gallery from '@/models/Gallery';
import cloudinary from '@/lib/cloudinary';
import { verifyAdmin } from '@/lib/auth';

// ============================================
// 🗑️ DELETE - Image delete
// ============================================
export async function DELETE(
  request: NextRequest, // ✅ Request ki jagah NextRequest
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log('🗑️ DELETE request for ID:', id);

    // 1. Admin verify
    const authResult = await verifyAdmin(request); // ✅ ab sahi kaam karega
    if (!authResult.success) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    console.log('✅ Auth passed');

    // 2. DB connect
    await connectDB();
    console.log('✅ DB connected');

    // 3. Image find
    const image = await Gallery.findById(id);
    if (!image) {
      console.log('❌ Image not found:', id);
      return NextResponse.json(
        { success: false, message: 'Image not found' },
        { status: 404 }
      );
    }
    console.log('✅ Image found:', image.title);

    // 4. Cloudinary se delete
    if (image.cloudinaryId) {
      try {
        const result = await cloudinary.uploader.destroy(image.cloudinaryId);
        console.log('✅ Cloudinary deleted:', result);
      } catch (cloudinaryError) {
        console.error('⚠️ Cloudinary delete error:', cloudinaryError);
      }
    }

    // 5. Database se delete
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
// 📝 PUT - Update image
// ============================================
export async function PUT(
  request: NextRequest, // ✅ Request ki jagah NextRequest
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log('✏️ PUT request for ID:', id);

    const authResult = await verifyAdmin(request); // ✅ ab sahi kaam karega
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
    const { title, description, category, isFeatured } = body;

    if (title !== undefined) image.title = title;
    if (description !== undefined) image.description = description;
    if (category !== undefined) image.category = category;
    if (isFeatured !== undefined) image.isFeatured = isFeatured;

    await image.save();

    return NextResponse.json({
      success: true,
      message: 'Image updated successfully',
      data: image,
    });

  } catch (error: any) {
    console.error('❌ Update error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Update failed' },
      { status: 500 }
    );
  }
}

// ============================================
// 📋 GET - Single image
// ============================================
export async function GET(
  request: NextRequest, // ✅ Request ki jagah NextRequest
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    await connectDB();
    
    const image = await Gallery.findById(id);
    
    if (!image) {
      return NextResponse.json(
        { success: false, message: 'Image not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: image,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to fetch image' },
      { status: 500 }
    );
  }
}