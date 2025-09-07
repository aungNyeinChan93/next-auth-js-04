import fs from 'fs'
import path from 'path'
import { genSalt, hash, compare } from "bcrypt-ts";
import { auth } from '@/lib/authjs/auth';
import { cache } from 'react';


// post-image upload
export async function uploadPostImage(file: File | undefined) {

    if (file?.name == "undefined") {
        return null;
    }
    const fileBuffer = Buffer.from(await (file as File)?.arrayBuffer())

    const fileName = `${Date.now()}-${(file as File).name}`;
    const filePath = path.join(path.resolve(), 'public', "post-images", fileName);
    await fs.promises.writeFile(filePath, fileBuffer)

    const image_url = `/post-images/${fileName}`;
    return image_url;
}

// hash password
export async function hashPassword(password: string | undefined, salt: number = 10) {
    return await hash(password as string, await genSalt(salt || 10))
}
// verify password
export async function checkPassword(plainStr: string | undefined, hashStr: string | undefined) {
    return await compare(plainStr as string, hashStr as string)
}

// isAuth
export async function isAuth() {
    const session = await auth();
    if (!session) {
        return false
    } else {
        return true;
    }
}

// getSession 
export const getSession = cache(async () => {
    const session = await auth();
    return session;
})