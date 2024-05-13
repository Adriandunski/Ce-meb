import {Product, products} from "@/utils/product/products";
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('category');

    const tablicaElementow: Product[] = products.filter(value => value.category === query);
    console.log(tablicaElementow);

    return Response.json(tablicaElementow);
}