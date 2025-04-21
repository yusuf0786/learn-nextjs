"use client";

import { useEffect, useState } from "react";

export default function Posts() {
    const [product, setProduct] = useState(null);
    const [loading, setloading] = useState(false);

    const getProdictsBiID = async (id) => {
        try {
            setloading(true)
            const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
            const response = await fetch(`${baseUrl}/api/products/${id}`, {
                method: 'GET',
                // next: {  This does not work on the client side/component and is ignored, only works on the server side/component
                //     revalidate: 5,
                // }
            })
            const data = await response.json();
            setProduct(data.product);
        } catch (error) {
            console.error(error);
        } finally {
            setloading(false);
        }
    }

    useEffect( () => {
        getProdictsBiID(8)
    }, [])

    return (
        <>
            <h1>Posts Page</h1>
            {loading && <p>Loading...</p>}
            {!loading &&
                <div>
                    <p>{product && product.name}</p>
                    <p>{product && product.age}</p>
                </div>
            }
        </>
    )
}