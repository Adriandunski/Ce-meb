import {cookies} from "next/headers";
import {NextRequest, NextResponse} from "next/server";
import {CookProduct} from "@/app/cookies/CookProductInter";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const favoriteId = Number.parseInt(searchParams.get('favorite') || '-1');

    const cooks = cookies().get('favorites')?.value || 'LACK';
    let cooksProductId: CookProduct[] = [];

    if (cooks !== 'LACK') {
        cooksProductId = JSON.parse(cooks);
    }
    cooksProductId.push({id: favoriteId});
    cookies().set('favorites', JSON.stringify(cooksProductId));

    return NextResponse.json('ok');
}

