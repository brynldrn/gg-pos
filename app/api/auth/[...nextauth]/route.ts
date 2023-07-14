import NextAuth, { NextAuthOptions } from 'next-auth'
import GitHub from 'next-auth/providers/github';

const authConfig: NextAuthOptions = {
  providers: [
    GitHub({
      id: 'github',
      name: 'github',
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || ''
    })
  ],
  pages: {
    signIn: '/login'
  }
}

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }
