import { collection, doc, getDoc, onSnapshot, orderBy, query } from 'firebase/firestore'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Explore from '../../components/Exploresection'
import Navigation from '../../components/Navigationsection'
import { db } from '../../firebase'

const UserIndex = () => {
    const router = useRouter()
    const pid = router.query
    const [userData, setuserData] = useState<any>({})

    useEffect(() => {
        console.log(pid)

        let username = router.query.users
        console.log(username, "USERNAME")
        const userData = async (username: any) => {
            const docRef = doc(db, "users", username);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setuserData(docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        {
            username && userData(username)
        }
    }, [router])
    console.log(userData)

    return (
        <div className="bg-black font-Monsertat ">
            {
                userData ? (
                    <Head>
                        <title>
                            {userData.name} / Twitter
                        </title>

                        {/* add a favicon */}
                        <link rel="icon" href="/SVG/twitterblue.svg" />
                    </Head>
                ) :
                    (
                        <Head>
                            <title>
                                Loading....
                            </title>
                            <link rel="icon" href="/SVG/twitterblue.svg" />
                        </Head>
                    )
            }
            <main className='max-w-6xl mx-auto  h-screen w-screen  grid grid-cols-1 md:grid-cols-4 border-2 '>
                <div className="hidden md:inline-grid border-2">
                    <div>
                        <Navigation />
                    </div>
                </div>
                <div className="border border-gray-900 col-span-2  overflow-y-auto">
                    {/* <Feed /> */}
                </div>
                <div className="border-2 hidden md:inline-grid">
                    <Explore />
                </div>
            </main>
        </div>
    )
}

export default UserIndex
