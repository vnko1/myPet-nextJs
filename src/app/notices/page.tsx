import { redirect } from "next/navigation";
import { LinksEnum } from "@/types";

function Notices() {
  return redirect(LinksEnum.NOTICES_SELL);
}

export default Notices;
