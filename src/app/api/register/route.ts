import prisma from "@/src/lib/db";
import { Prisma } from "@prisma/client";
import { genSalt, hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const body = await request.json() as Prisma.UserCreateInput

    const user = await prisma.user.findUnique({
        where: {email: body.email}
    })
    if (user !== null) {
        return NextResponse.json({message: 'email is already exist'}, {status: 400})
    }

    const salt = await genSalt(10)
    const hashPassword = await hash(body.password, salt)

    const newUser = await prisma.user.create({data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: hashPassword
    }})
    return NextResponse.json({
        message: 'success',
        data: newUser
    },
    {
        status: 201
    })
}