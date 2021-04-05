import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { useRouter } from 'next/router'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user'
    }),
  ],

  jwt: {
    signingKey: process.env.SIGNING_KEY
  },

  callbacks: {

    async signIn(user, account, profile) {
      return true
    }
  }
})