// app/api/services/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";

// ✅ FIX: params ko Promise type dena hai
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    const { slug } = await params; // ✅ await karna hoga
    
    const service = await Service.findOne({ slug }).lean();
    
    if (!service) {
      return NextResponse.json(
        { success: false, error: "Service not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: service });
  } catch (error) {
    console.error("Error fetching service:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch service" },
      { status: 500 }
    );
  }
}

// ✅ PUT method ke liye bhi fix
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    const { slug } = await params;
    const body = await request.json();
    
    const service = await Service.findOneAndUpdate(
      { slug },
      body,
      { new: true, runValidators: true }
    );
    
    if (!service) {
      return NextResponse.json(
        { success: false, error: "Service not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: service });
  } catch (error) {
    console.error("Error updating service:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update service" },
      { status: 500 }
    );
  }
}

// ✅ DELETE method ke liye bhi fix
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    const { slug } = await params;
    
    const service = await Service.findOneAndDelete({ slug });
    
    if (!service) {
      return NextResponse.json(
        { success: false, error: "Service not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: service });
  } catch (error) {
    console.error("Error deleting service:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete service" },
      { status: 500 }
    );
  }
}