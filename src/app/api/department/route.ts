import { NextRequest, NextResponse } from "next/server";
import { create, findAll } from "../../(main-dashboard)/dashboard/services/department-service";
import { Prisma } from "@prisma/client";

export async function GET() {
    const data = await findAll();
    return NextResponse.json(data)
}

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
