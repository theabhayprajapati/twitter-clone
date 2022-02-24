import { useSession, signIn, signOut, getProviders } from "next-auth/react"

export default function Component({ provider }: any) {
    const { data: session } = useSession()
    if (session) {
        return (
            <div className="text-white">
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )
    
    return (
        <div className="text-white">
            Not signed in <br />
            <button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>Sign in</button>
        </div>
    )
}
export async function getServerSideProps(context: any) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}