import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  if (!data?.email || !data?.firstName || !data?.lastName || !data?.gdpr) {
    return NextResponse.json({ ok: false, error: "Invalid" }, { status: 400 });
  }
  console.log("WAITLIST", data); // TODO: wire to DB/Sheet/Airtable
  return NextResponse.json({ ok: true });
}
