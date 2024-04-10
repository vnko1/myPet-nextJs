import { NextRequest, NextResponse } from "next/server";
import { Files } from "@/services";
import { FormValues } from "@/types";
import { errorResponse } from "@/utils";

const files = new Files();

export async function POST(request: NextRequest) {
  try {
    const res: FormValues = await request.json();

    // const imageUrl = await files.upload(res.file, {
    //   overwrite: false,
    //   resource_type: "image",
    //   folder: "pets/avatar",
    //   public_id: user._id.toString(),
    //   eager: "f_auto",
    // });
    console.log("🚀 ~ POST ~ request:", res);
    return NextResponse.json({ status: 204 });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(errorResponse(error.message));
  }
}
