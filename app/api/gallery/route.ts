import { NextRequest, NextResponse } from "next/server";
import { connectDB } from '@/lib/mongodb';
import Gallery from '@/models/Gallery';

// ✅ GET - All images (Public)
export async function GET(request: Request) {
  try {
    await connectDB();
    
    const url = new URL(request.url);
    const featured = url.searchParams.get('featured');
    const category = url.searchParams.get('category');
    const limit = parseInt(url.searchParams.get('limit') || '50');
    
    const filter: any = {};
    if (featured === 'true') filter.isFeatured = true;
    if (category && category !== 'all') filter.category = category;

    const images = await Gallery.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit);
    
    return NextResponse.json({
      success: true,
      data: images,
    });
  } catch (error: any) {
    console.error('Gallery GET error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to fetch images' },
      { status: 500 }
    );
  }
}