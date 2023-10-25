import { findById, remove, update } from "@/src/app/(main-dashboard)/dashboard/services/department-service";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, {params} : {params : {id : string}}) {
    
    try {
        const id = params.id
        const data = await findById(Number(id));
        if (!data) {
            return NextResponse.json({
                message : "not found"
            },
            {
                status: 404
            })
        }
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(error, {status: 500})
    }
}

export async function PUT(request: NextRequest, {params} : {params : {id : string}}) {
    try {
        const id = params.id
        const data = await findById(Number(id));
        if (!data) {
            return NextResponse.json({
                message : "not found"
            },
            {
                status: 404
            })
        }
        const bodyJson = await request.json() as Prisma.DepartmentCreateInput
        const updateRecord = await update(Number(id), bodyJson)
        return NextResponse.json({
            message: 'success',
            data: updateRecord
        },
        {
            status: 200
        })
    } catch (error) {
        return NextResponse.json(error, {status: 500})
    }
}

export async function DELETE({params} : {params : {id : string}}) {
    try {
        const id = params.id
        const deleteRedcord = await remove(Number(id));
        return NextResponse.json({
            message: 'success',
            data: deleteRedcord
        },
        {
            status: 200
        })
    } catch (error) {
        return NextResponse.json(error, {status: 500})
    }
}