import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from "../../../lib/db";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {},
        password: {},
      },

      async authorize(credentials) {
        const { username, password } = credentials;

        // ambil user dari DB
        const result = await pool.query(
          "SELECT * FROM users WHERE username = $1",
          [username]
        );

        const user = result.rows[0];

        if (!user) return null;

        // cek password
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) return null;

        // login berhasil
        return {
          id: user.id,
          name: user.name,
          username: user.username,
        };
      },
    }),
  ],

  // 🔥 penting biar data user bisa dipakai di frontend
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.username = token.username;
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };