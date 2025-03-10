// import { PrismaClient } from '@prisma/client';

// const prisma = global.prisma ??
//   new PrismaClient({ log: ['query'] });
// if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

// export default prisma;
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  let globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }
  prisma = globalWithPrisma.prisma;
}

export default prisma;
