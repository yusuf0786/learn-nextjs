"use client";
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Caching() {

    const [randomApiNumber, setRandomApiNumber] = useState(null)

    const calRandomNumberApi = async () => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
            const response = await fetch(`${baseUrl}/api/random`, {
                method: 'GET',
                cache: "no-store", // Default On Client Compenent
                // cache: "force-cache", 
                /**
                    Below Code does not work on the client side/component and is ignored, only works on the server side/component
                    next: {
                        revalidate: 5,
                    }
                */
            })
            const json = await response.json()
            setRandomApiNumber(json.data)
        } catch (error) { console.error(error); }
    }

    useEffect(() => {
        calRandomNumberApi()
    }, [])

    function randomThreeDigitNumber() {
        return Math.floor(Math.random() * (1000 - 100) + 100)
    }
    return (
        <>
        <h1>Caching</h1>
        <h2 style={{color:"cyan"}}>Client Component</h2>
        <p>{randomThreeDigitNumber()}</p>
        <Link href="/caching2">Go TO Caching2 Page</Link>

        <br/>
        <br/>
        <p>Random Number from API: {randomApiNumber && randomApiNumber}</p>
        </>
    )
}