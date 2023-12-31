import prisma from "@/src/lib/db";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  pages: {
    signIn: '/login'
  },
  useSecureCookies: false,
  providers: [
    CredentialsProvider({
        credentials: {},
        async authorize(credentials, req) {
            const {email, password} = credentials as {email: string, password: string}
            const user = await prisma.user.findUnique({where: {email: email}})
            if (!user) {
                throw new Error('User not found')
            }
            
            const isValid = await compare(password, user.password)
            if (!isValid) {
                throw new Error('Credential is not valid')
            }

            return {
                id: user.id.toString(),
                name: user.firstName + ' ' + user.lastName,
                email: user.email,
                image: "https://xsgames.co/randomusers/assets/avatars/pixel/8.jpg"        
            }
        }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
