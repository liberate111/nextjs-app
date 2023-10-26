import { NextRequest, NextResponse } from "next/server";
import { create, findAll, findAllWithPagination, findTotalRecord } from "../../(main-dashboard)/dashboard/services/department-service";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get("page") as string;
    const pageSize = searchParams.get("pageSize") as string;
    const data = await findAllWithPagination(Number(page), Number(pageSize));
    const totalRecord = await findTotalRecord();
    return NextResponse.json({
        totalRecord,
        data
    });
}

// export async function GET() {
//     const data = await findAll();
//     return NextResponse.json(data)
// }

export async function POST(request: NextRequest) {
    const bodyJson = await request.json() as Prisma.DepartmentCreateInput
    const newRecord = await create(bodyJson);
    return NextResponse.json({
        message: 'success',
        data: newRecord
    },
    {
        status: 201
    })
}
