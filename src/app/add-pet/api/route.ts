import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { Files } from "@/services";
import { LinksEnum, PetResponseValue } from "@/types";
import { errorResponse } from "@/utils";
import { Notices, Pets } from "@/lib/database";
import { revalidatePath } from "next/cache";

const files = new Files();
const pets = new Pets();
const notices = new Notices();

export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get("userId");

    const res: PetResponseValue = await request.json();
    const folderName = res.category === "your-pet" ? "pets" : "notices";

    if (userId) {
      const imageUrl = await files.upload(res.file, {
        overwrite: false,
        resource_type: "image",
        folder: `pets/${folderName}/${userId}`,
        public_id: Date.now().toString(),
        eager: "f_auto",
      });
      res.imageUrl = imageUrl.eager[0].secure_url;
      res.owner = userId;

      if (res.category === "your-pet") {
        await pets.addPet(res);
        revalidatePath(LinksEnum.USER, "layout");
      } else {
        await notices.addNotice({ ...res, category: res.category });
        revalidatePath(LinksEnum.NOTICES, "layout");
      }

      return NextResponse.json({});
    }
    redirect(LinksEnum.HOME);
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(errorResponse(error.message), { status: 400 });
  }
}
