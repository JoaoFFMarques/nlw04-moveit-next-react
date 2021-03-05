import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'


const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],

}

export default (req, res) => NextAuth(req, res, options
    // A database is optional, but required to persist accounts in a database
    // database: process.env.DATABASE_URL,
)