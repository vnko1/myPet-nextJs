import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  console.log("🚀 ~ POST ~ request:", res);
  return NextResponse.json({ status: 204 });
}
