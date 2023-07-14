import prisma from '@/lib/prisma';
import NextAuth, { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import bcrypt from 'bcrypt'

export const authConfig: NextAuthOptions = {
  providers: [
    GitHub({
      id: 'github',
      name: 'github',
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || ''
    }),
    Credentials({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        password: { label: 'Password', type: 'password', placeholder: 'Password' }
      },
      async authorize(credentials, _req) {
        const user = await prisma.user.findUnique({
          where: {
            username: credentials?.username
          }
        })

        const correctPassword = await bcrypt.compare(credentials?.password || '', user?.password || '')
        
        if (correctPassword) {
          return {
            id: user?.id || 'userId',
            ...user,
          };
        }

        return null
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    session: async ({session, token, user}) => {
      return {
        ...session,
        user: {
          ...token,
          ...user,
        }
      }
    }
  }
}

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }
