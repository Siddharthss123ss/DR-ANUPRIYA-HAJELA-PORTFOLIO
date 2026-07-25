import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";  // ✅ connectToDatabase → connectDB
import Service from "@/models/Service";

export async function GET() {
  try {
    await connectDB();  // ✅ connectToDatabase() → connectDB()
    
    const services = await Service.find({})
      .sort({ order: 1, createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      data: services,
      count: services.length,
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch services",
      },
      { status: 500 }
    );
  }
}

// POST - For admin to add new service
export async function POST(request: Request) {
  try {
    await connectDB();  // ✅ connectToDatabase() → connectDB()
    const body = await request.json();

    const service = new Service(body);
    await service.save();

    return NextResponse.json(
      {
        success: true,
        data: service,
        message: "Service created successfully",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating service:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to create service",
      },
      { status: 500 }
    );
  }
}