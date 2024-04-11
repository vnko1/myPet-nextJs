import { Pets } from "@/lib/database";
import { errorResponse } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

const pets = new Pets();

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get("userId") || "";

    const userPets = await pets.findPets(userId);

    return NextResponse.json(userPets);
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(errorResponse(error.message));
  }
}
