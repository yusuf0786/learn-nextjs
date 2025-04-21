const fetchProduct = async (postId) => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
        const response = await fetch(`${baseUrl}/api/products/${postId}`, {
            method: "GET",
            // next:{
            //     revalidate: 5,
            // }
        })
        const data = await response.json()
        return data.product
    } catch (error) {
        console.error(error);
    }
}

export async function generateMetadata({params}) {

    const {id} = await params
    const product = await fetchProduct(id)
    
    return {
        title: product.name,
        description: product.id,
        openGraph: {
            title: product.name,
            description: product.id,
            url: "mywebsite.com",
            siteName: "Learn Next JS",
            images: [
                {
                    url:"/mywebsite.png",
                    width: 1260,
                    height: 800,
                }
            ],
        }
    }
    
}

export default async function PostID({params}) {
    const {id} = await params
    return <div>PostID {id}</div>
}