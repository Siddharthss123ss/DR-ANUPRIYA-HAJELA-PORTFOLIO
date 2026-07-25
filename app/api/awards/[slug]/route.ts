import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Award from "@/models/Award";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    const { slug } = await params;
    
    const award = await Award.findOne({ slug }).lean();
    
    if (!award) {
      return NextResponse.json(
        { success: false, error: "Award not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: award });
  } catch (error) {
    console.error("Error fetching award:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch award" },
      { status: 500 }
    );
  }
}