import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient().$extends({
    result: {
      user: {
        fullName: {
          // the dependencies
          needs: { firstName: true, lastName: true },
          compute(user) {
            // the computation logic
            return `${user.firstName} ${user.lastName}`;
          },
        },
      },
    },
  }).$extends({
    model: {
      tag: {
        async searchCustomerByName(keyword: string) {
          return prisma.tag.findMany({
            where: { name: { contain: `${keyword}`}},
            orderBy: {id: 'desc'}
          })
        }
      }
    }
  })
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
