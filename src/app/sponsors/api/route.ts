import { Sponsors } from "@/lib";

export async function GET() {
  try {
    const sponsors = new Sponsors();
    const res = await sponsors.getSponsors();

    return Response.json(res);
  } catch (error) {
    console.log(error);
  }
}
