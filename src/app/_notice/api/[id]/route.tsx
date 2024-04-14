import { Notices } from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";

const notices = new Notices();

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  request;

  const data = await notices.findNotice(id);

  return NextResponse.json(data);
}
