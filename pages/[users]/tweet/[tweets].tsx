import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Explore from '../../../components/Exploresection'
import Navigation from '../../../components/Navigationsection'
import SingleTwitter from '../../../components/SingleTwitter'
import { db } from '../../../firebase'

const UserTweets = () => {
    const router = useRouter()
    console.log(router.query)
    // name usestate for users andtweets
    const { users, tweets }: any = router.query
    console.log(router.query.users)

    // const router = useRouter()
    const [Alltweets, setAlltweets] = useState<any>([])
    const AlltweetsRef = collection(db, "tweets")
    const { data: session } = useSession()
    // const username = session && (session?.user?.email).split("@")[0]


    useEffect(() => {
        // let querydaata = query(Alltweets, orderBy('desc'))
        users && tweets ? onSnapshot(doc(db, "tweets", tweets), (snapshot) => setAlltweets(snapshot.data())) : null;

        // fetch data the firebase doc tweets with tweets id
        // onSnapshot(doc(db, "tweets", tweets), (snapshot) => setAlltweets(snapshot.docs))


    }, [router.query])
    console.log(Alltweets, "Tweets data")

    const DotsButtonClicked = async (id: any, screen_name: any) => {
        console.log("delete button clicked", id)
        // delete the tweet
        // check if username matches to username in data() from firebase


        if (users === screen_name) {
            alert("Access granted")
            let docRef = doc(db, 'tweets', id)
            await deleteDoc(docRef)
        } else {
            alert('Access denied')

        }

    }
    console.log(users, tweets)


    return (
        <div>
            {
                users && tweets && Alltweets ? (
                    <Head>
                        <title>
                            {Alltweets.name} / {tweets} / Twitter
                        </title>
                        {/* add favicon */}
                        <link rel="icon" href="/SVG/twitterblue.svg" />
                    </Head>
                ) :
                    (<Head>
                        <title>
                            Loading....
                        </title>
                        <link rel="icon" href="/SVG/twitterblue.svg" />
                    </Head>)
            }



            <main className='max-w-6xl mx-auto  h-screen w-screen  grid grid-cols-1 md:grid-cols-4 border-2 '>
                <div className="hidden md:inline-grid border-2">
                    <div>
                        <Navigation />
                    </div>
                </div>
                <div className="border border-gray-900 col-span-2 w-full  overflow-y-auto">
                    <SingleTwitter tweets={Alltweets} />
                </div>
                <div className="border-2 hidden md:inline-grid">
                    <Explore />
                </div>
            </main>
        </div>
    )
}

export default UserTweets