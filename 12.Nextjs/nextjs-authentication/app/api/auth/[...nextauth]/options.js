import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
export const options = {
    providers: [
        GitHubProvider({
            profile(profile){
                console.log("Profile Github: ", profile)
                let userRole = "GitHub User"
                if (profile?.email === "saeidebrahimiappl@gmail.com"){
                    userRole = "admin"
                }
                return {
                    ...profile,
                    role: userRole
                }
            },
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRECT
        }),
        GoogleProvider({
            profile(profile){
                console.log("Profile Google: ", profile)
                let userRole = "Google User"
                if(profile?.email === "saeidebrahimiapply@gmail.com"){
                    userRole = "admin"
                }
                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                }
            },
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRECT
        })
    ],
    callbacks: {
        async jwt({token, user}){
            if (user) token.role = user.role
            return token
        },
        async session({session, token}){
            if (session?.user) session.user.role = token.role
            return session
        }
    }
}