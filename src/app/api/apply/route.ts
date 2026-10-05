import { NextResponse } from "next/server";

// The old application form posted here, straight into a Google Sheet. Applications now go through the portal
// (/apply/creator and /apply/editor), which has accounts and review. Nothing should post here any more, so it no
// longer writes anywhere: an unauthenticated endpoint that forwards to the team's sheet only invites spam.
export function POST() {
  return NextResponse.json(
    { error: "This form has moved. Please apply at /apply/creator or /apply/editor." },
    { status: 410 },
  );
}
