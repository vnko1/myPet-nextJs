import { LinksEnum } from "@/types";
import { redirect } from "next/navigation";

function AddPet() {
  return redirect(LinksEnum.ADD_PET_OPTION);
}

export default AddPet;
