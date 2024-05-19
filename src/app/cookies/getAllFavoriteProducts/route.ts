import {cookies} from "next/headers";
import {NextResponse} from "next/server";
import {CookProduct} from "@/app/cookies/CookProductInter";

export async function GET() {
    const cooks = cookies().get('favorites')?.value || 'LACK';

    if (cooks !== 'LACK') {
        const cook: CookProduct[] = JSON.parse(cooks);
        return NextResponse.json(cook);
    }

    return NextResponse.json([]);
}