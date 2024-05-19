import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import {CookProduct} from "@/app/cookies/CookProductInter";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const favoriteId = Number.parseInt(searchParams.get('favorite') || '-1');

    const cooks = cookies().get('favorites')?.value || 'LACK';

    if (cooks !== 'LACK') {
        let cooksProductId: CookProduct[] = JSON.parse(cooks);
        cooksProductId = cooksProductId.filter(x => x.id !== favoriteId);
        cookies().set('favorites', JSON.stringify(cooksProductId));
        return NextResponse.json('ok');
    }

    return NextResponse.json('error');
}