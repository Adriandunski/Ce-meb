import {NextRequest, NextResponse} from "next/server";
import {Product, products} from "@/utils/product/products";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = parseInt(searchParams.get('id') || '0');

    const tablicaElementow: Product[] = products.filter(value => value.id === query);

    if (tablicaElementow.length === 0) {
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
    }

    return NextResponse.json(tablicaElementow[0]);
}