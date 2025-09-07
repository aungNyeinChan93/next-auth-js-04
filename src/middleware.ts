import { auth } from "@/lib/authjs/auth";
import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@/generated/prisma";
export { auth } from "@/lib/authjs/auth"



const protectedRoutes = ['/posts', '/users', '/userInfo', '/private/dashboard'];
const adminRoutes = ['/private/dashboard'];

export default async function middleware(request: NextRequest) {
    const prisma = new PrismaClient();

    const { pathname } = request.nextUrl;
    const isProtected = protectedRoutes.some(route => pathname.startsWith(route));
    const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route));

    const session = await auth();
    // const authUser = await prisma.user.findUnique({ where: { email: session?.user?.email as string } });

    if (isProtected && !session) {
        return NextResponse.redirect(new URL('/auth/login', request?.url))
    }

    // if (isAdminRoute && !session && authUser?.role !== 'admin') {
    //     return NextResponse.rewrite(new URL('/', request.url), { status: 403 })
    // }

    return NextResponse.next();
}