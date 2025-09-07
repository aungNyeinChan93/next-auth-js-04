import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import prisma from "../db/prisma-client";
import { checkPassword } from "@/utils/helper";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GitHub,
        Credentials({
            name: "credentials",
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

                const isCorrect = await checkPassword(password as string, user?.password as string)
                if (!isCorrect) {
                    throw new Error('Credential is not correct!')
                };

                return user;
            }
        }),
    ],
    pages: {
        signIn: "/auth/login",

    },
    callbacks: {
        session: async ({ session, token }) => {
            if (token?.sub) {
                session.user.id = token.sub;
                // session.user.email = token?.email as string
            }
            return session;
        },
        jwt: async ({ user, token }) => {
            if (user) {
                // token?.sub = user?.email
                // token.role = user.role;
            }
            return token
        },
        signIn: async ({ user, account }) => {
            if (account?.provider === 'github') {
                const { id, name, email, image } = user;

                try {
                    const isUserExist = await prisma.user.findUnique({ where: { email: email as string } })
                    if (!isUserExist) {
                        await prisma.user.create({
                            data: { email: email as string, name, avator: image, provider_id: id }
                        })
                    }
                    return true;
                } catch (error) {
                    if (error instanceof Error) {
                        throw new Error(error?.message)
                    }
                }
            }
            if (account?.provider === 'credentials') {
                return true;
            }

            return false

        }
    }
})