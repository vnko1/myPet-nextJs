import { NextResponse } from "next/server";
import { errorResponse } from "@/utils";
import { Pets } from "@/lib/database";
import { revalidatePath } from "next/cache";
import { LinksEnum } from "@/types";

const pets = new Pets();

export async function DELETE(
  _: unknown,
  { params }: { params: { petId: string } }
) {
  try {
    await pets.deletePet(params.petId);

    revalidatePath(LinksEnum.USER);
    return NextResponse.json({});
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(errorResponse(error.message), { status: 400 });
  }
}
