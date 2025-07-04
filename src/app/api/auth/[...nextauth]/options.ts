import  type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProviders from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENTE_SECRET as string,
    }),
    CredentialsProviders({
      name: "Credentials",
      credentials: {
        username: {
            label: "Username",
            type: "text",
            placeholder: "your-cool-username",
        },
        password: {
            label: "Password",
            type: "password",
            placeholder: "your-awesome-password"
        }
      },
      async authorize(credentials) {
        const user = { id: "29", name: "Jose Tamara", password: "nextauth" }

        if (credentials?.username === user.name && 
            credentials?.password === user.password
          ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
},
session: {
  strategy: "jwt",
},
callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user
      return token
    },
    async session({ session, token }) {
      session.user = token.user as any
      return session
    },
  },
}