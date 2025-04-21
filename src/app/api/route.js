// import { data } from "@/data.json"
import data from "../../data.json"
import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({
        message: "Hello, World!",
        data
    })
}

// export async function POST(request) {
//     const resData = await request.json()
//     return NextResponse.json({
//         message: "Success",
//         resData,
//     })
// }

/*
 Methods: GET, POST, PUT, PATCH
*/