import { NextResponse } from "next/server"

export async function GET() {
    function randomThreeDigitNumber() {
        return Math.floor(Math.random() * (1000 - 100) + 100)
    }

    return NextResponse.json({
        message: "Hello, World!",
        data: randomThreeDigitNumber()
    })
}