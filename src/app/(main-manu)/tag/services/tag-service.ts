import prisma from '@/src/lib/db';
import { KPI } from '@prisma/client';

export async function getTags() : Promise<KPI[]>{
  return await prisma.kPI.findMany(
    {
        orderBy: {id: 'desc'}
    }
  );
}

// export async function getTag() : Promise<KPI[]>{
//     return await prisma.kPI.findMany(
//       {
//           select: {id: true, tag: true},
//           orderBy: {id: 'desc'}
//       }
//     );
// }

export async function countTag() {
    return await prisma.kPI.count();
}

// sql raw
export async function getTagRaw() {
    return await prisma.$queryRaw`SELECT * FROM KPI ORDER BY id DESC`
}

export async function getTagById(id:number) {
    return await prisma.kPI.findUnique({
        where: {
            id: id
        }
    })
}