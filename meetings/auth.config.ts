import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
// import Resend from "next-auth/providers/resend";
// import { env } from "./env.mjs";

export default {
    providers: [
        Google
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL("/dashboard", nextUrl));
            }
            return true;
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    randomKey: u.randomKey,
                };
            }
            return token;
        },
        session(params) {
            return {
                ...params.session,
                user: {
                    ...params.session.user,
                    id: params.token.id as string,
                    randomKey: params.token.randomKey,
                },
            };
        },
    },
} satisfies NextAuthConfig;
