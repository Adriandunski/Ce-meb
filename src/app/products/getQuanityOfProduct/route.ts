import {NextRequest, NextResponse} from "next/server";
import {Product, products} from "@/utils/product/products";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('category');

    const tablicaElementow: Product[] = products.filter(value => value.category === query);

    return NextResponse.json(tablicaElementow.length);
}