import { getSession } from "@/lib/actions";
import { Pets } from "@/lib/database";
import { errorResponse } from "@/utils";
import { NextResponse } from "next/server";

const pets = new Pets();

export async function GET() {
  try {
    const { userId } = await getSession();

    const userPets = await pets.findPets(userId || "");

    return NextResponse.json(userPets);
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(errorResponse(error.message), { status: 400 });
  }
}
