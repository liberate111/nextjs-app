import prisma from "@/src/lib/db";
import { Prisma } from "@prisma/client";

export async function findTotalRecord() {
    return await prisma.department.count()
}

export async function findAllWithPagination(page = 1, pageSize =3) {
    return await prisma.department.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: {id: "asc"}
    })
}

export async function findAll() {
    return await prisma.department.findMany({orderBy: {id: 'desc'}})
}

export async function findById(id: number) {
    return await prisma.department.findUnique({where: {id: id}})
}

export async function create(data: Prisma.DepartmentCreateInput) {
    return await prisma.department.create({data})
}

export async function update(id: number, data: Prisma.DepartmentUpdateInput) {
    return await prisma.department.update({
        where: {id : id},
        data: data
    })
}

export async function remove(id: number) {
    return await prisma.department.delete({where: {id: id}})
}

export async function searchByName(keyword:String) {
    return await prisma.department.findMany({
        where: { name : { contains : `{$keyword}`}}
    })
}