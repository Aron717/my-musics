"user server"
import "server-only"
import { auth } from "./auth"
import { prisma } from "./prisma";

export async function getUser(){
    const session = await auth()
    if (!session) {
        return null;
    }
    const dbUser = await prisma.user.findUnique({where: {id: session.user?.id}})
    return dbUser
} 