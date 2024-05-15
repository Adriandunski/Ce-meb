import {NextRequest, NextResponse} from "next/server";
import {Product, products} from "@/utils/product/products";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = parseInt(searchParams.get('id') || '0');

    const tablicaElementow: Product[] = products.filter(value => value.id === query);
    const x = Math.floor(Math.random() * 9)  * 1000;

    // await new Promise(resolve => setTimeout(resolve, x));

    return NextResponse.json(tablicaElementow[0]);
}