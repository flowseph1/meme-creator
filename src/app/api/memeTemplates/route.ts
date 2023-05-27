import { NextResponse } from "next/server";
import memeTemplates from "../../(data)/memeTemplates";

export async function GET() {
  return NextResponse.json(memeTemplates);
}
