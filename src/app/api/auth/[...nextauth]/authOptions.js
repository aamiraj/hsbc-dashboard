import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {},
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { email, password } = credentials;
        await connectMongoDB();
        try {
          const foundUser = await User.findOne({ email });

          if (foundUser) {
            // Any object returned will be saved in `user` property of the JWT
            const passMatched = await bcrypt.compare(
              password,
              foundUser.password
            );

            if (!passMatched) {
              return null;
            }
            delete foundUser.password;
            const user = {
              name: foundUser.fullname,
              email: foundUser.email,
              role: foundUser.role,
            };

            return user;
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null;
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        } catch (error) {
          console.log("Error", error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
};

export default authOptions;
