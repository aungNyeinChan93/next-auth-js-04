import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import prisma from "../db/prisma-client";
import { checkPassword } from "@/utils/helper";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GitHub,
        Credentials({
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                const { email, password } = credentials;

                if (!email || !password) {
                    throw new CredentialsSignin('Some Fiels Are Required')
                }

                const user = await prisma.user.findUnique({
                    where: { email: email as string }
                })

                if (!user) {
                    throw new Error('Email is not Exisit')
                };

                const isCorrect = await checkPassword(password as string, user?.password)
                if (!isCorrect) {
                    throw new Error('Credential is not correct!')
                };

                return user
            }
        })

    ],
})