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

  callbacks: {
    // JWT callback: menambahkan data user ke token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },

    // Session callback: menambahkan data token ke session
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.username = token.username;
      return session;
    },
  },

  // Konfigurasi session
  session: {
    strategy: "jwt",        // pakai JWT
    maxAge: 60 * 60,        // 1 jam = 3600 detik
    updateAge: 0,           // jangan perpanjang otomatis
  },

  // Konfigurasi JWT
  jwt: {
    maxAge: 60 * 60,        // 1 jam
  },

  // Halaman login custom
  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };