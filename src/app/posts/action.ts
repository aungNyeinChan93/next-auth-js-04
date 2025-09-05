"use server"

import prisma from "@/lib/db/prisma-client"


export async function getAllPosts(limit: string | number = 10) {
    const posts = await prisma.post.findMany({
        orderBy: { created_at: "desc" },
        include: {
            author: true,
            comments: true,
        },
        take: Number(limit) || 10
    })
    return posts;
}