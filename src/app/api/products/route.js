import { NextResponse } from "next/server"
import data from '../../data.json'

export async function GET() {
    return NextResponse.json({
        message: "success",
        data
    })
}

function generateUniqueId() {
    return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export async function POST(request) {
    const requestBody = await request.json()

    if (!requestBody.name || !requestBody.age) {
        return NextResponse.error()
    }

    data.push({
        id: generateUniqueId(),
        name: requestBody.name,
        age: parseFloat(requestBody.age),
    })

    return NextResponse.json({
        data
    })

}