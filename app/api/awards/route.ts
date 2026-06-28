import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Award from "@/models/Award";

export async function GET() {
  try {
    await connectDB();

    const awards = await Award.find();

    return Response.json(awards);
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const award = await Award.create({
  title: body.title,
  slug: body.slug,
  description: body.description,
  year: body.year,
  image: body.image,
  
    });

    return Response.json(award);
  } catch (error) {
    console.log(error);

    return Response.json(
      { message: "Failed to create award" },
      { status: 500 }
    );
  }
}