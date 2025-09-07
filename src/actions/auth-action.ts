'use server'

import { signIn } from "@/lib/authjs/auth"
import prisma from "@/lib/db/prisma-client"
import { hashPassword } from "@/utils/helper"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export async function loginWithGitHub() {
    await signIn('github', { redirectTo: "/" })
    return redirect('/')
}


export async function loginWithCredential(prevState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // console.log({email});

    if (!email || !password) {
        return { success: false, error: 'Some Fields are required!' }
    }

    try {
        await signIn('credentials', { redirect: false, email, password });
    } catch (error) {
        if (error instanceof Error) {
            // return { success: false, error: error?.message }
            console.error(error?.message)
            return { success: false, error: 'Credential Error!' }
        }
    }


    return redirect('/')
}


export async function registerAction(initialState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;


    if (!email || !password) {
        return { success: false, error: 'Some Fields Are Required!' }
    }

    const isExist = await prisma.user.findUnique({
        where: { email }
    })
    if (isExist) {
        return { success: false, error: "email is already used!" }
    }
    try {
        await prisma.user.create({
            data: { email, password: await hashPassword(password) }
        })
    } catch (error) {
        if (error instanceof Error) {
            return { success: false, error: error?.message }
        }
    }
    revalidatePath('/users')
    return redirect('/api/auth/signin')
}