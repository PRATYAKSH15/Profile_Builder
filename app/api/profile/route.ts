import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const profile = await prisma.profile.create({
      data: {
        userId: body.userId,
        name: body.name,
        email: body.email,
        education: body.education,
        skills: body.skills,
        summary: body.summary,
      },
    });

    return NextResponse.json(profile);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save profile" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");

  if (!userId) return NextResponse.json({ error: "Missing userId" }, { status: 400 });

  const profile = await prisma.profile.findFirst({
    where: { userId },
  });

  return NextResponse.json(profile);
}
