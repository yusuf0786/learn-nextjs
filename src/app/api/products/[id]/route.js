import { NextResponse } from "next/server";
import data from "../../../data.json";

export const GET = async (request, { params }) => {
try {
    const productId = params.id;
    const product = data.find((item) => item.id.toString() === productId);

    if (!product) {
        return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

//  return NextResponse.json({ message: "Success", product });
    return NextResponse.json({
        message: "Success",
        product
    });
} catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
}
}