import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import {connectToDatabase} from "@/lib/db";
import {verifyPassword} from "@/lib/auth";

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
                // name: "Credentials",
                // credentials: {
                //     email: { label: "Email", type: "text" },
                //     password: { label: "Password", type: "password" }
                // },
            async authorize(credentials){
                const client = await connectToDatabase();
                const usersCollection = await client.db().collection('users')
                const user = await usersCollection.findOne({email: credentials.email})
                if (!user){
                    await client.close()
                    throw new Error("No user found!");
                }
                const isValid = await verifyPassword(credentials.password, user.password)
                if (!isValid){
                    await client.close()
                    throw new Error("Could not log you in!")
                }
                await client.close()
                return { email: user.email };
            }
    }
    )],

});