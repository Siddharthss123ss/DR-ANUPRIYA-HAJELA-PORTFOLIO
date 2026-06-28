import { connectDB } from "@/lib/mongodb";
import Award from "@/models/Award";
import { NextResponse } from "next/server";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(
  request: Request,
  { params }: Props
) {
  try {
    await connectDB();

    const { slug } = await params;

    const award = await Award.findOne({ slug });

    if (!award) {
      return NextResponse.json(
        { message: "Award not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(award);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Failed to fetch award" },
      { status: 500 }
    );
  }
}