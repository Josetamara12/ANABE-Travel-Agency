import  type { NextAuthOptions } from "next-auth";
import Githubprovider from "next-auth/providers/github";
import CredentialsProviders from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    Githubprovider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
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

        if (credentials?.username === user.name && credentials?.password === user.password) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
}