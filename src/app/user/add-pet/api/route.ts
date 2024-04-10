import { errorResponse } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const res = await request.json();
    console.log("🚀 ~ POST ~ request:", res);
    return NextResponse.json({ status: 204 });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(errorResponse(error.message));
  }
}
