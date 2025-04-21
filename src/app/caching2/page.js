"use server";
import Link from "next/link"

export default async function Caching2() {
    let randomApiNumber = null

    const calRandomNumberApi = async () => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
            const response = await fetch(`${baseUrl}/api/random`, {
                method: 'GET',
                cache: "force-cache", // Default On Server Compenent
                // cache: "no-store",
                // Below Code does not work on the client side/component and is ignored, only works on the server side/component
                next: {
                    revalidate: 5,
                }
            })
            const json = await response.json()
            return json.data
        } catch (error) { console.error(error); }
    }

    randomApiNumber = await calRandomNumberApi()

    function randomThreeDigitNumber() {
        return Math.floor(Math.random() * (1000 - 100) + 100)
    }
    return (
        <>
        <h1>Caching2</h1>
        <h2 style={{color:"green"}}>Server Component</h2>
        <p>{randomThreeDigitNumber()}</p>
        <Link href="/caching">Go To Caching Page</Link>

        <br/>
        <br/>
        <p>Random Number from API: {randomApiNumber && randomApiNumber}</p>
        </>
    )
}