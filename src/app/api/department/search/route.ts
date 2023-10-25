import { searchByName } from "@/src/app/(main-dashboard)/dashboard/services/department-service";
import { NextRequest, NextResponse } from "next/server";

export default async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const keyword = searchParams.get("name") as string;
  const data = await searchByName(keyword);
  return NextResponse.json(data);
}
