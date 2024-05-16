import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function GET() {
    cookies().set('cookiesAccess', 'true');

    return NextResponse.json('ok');
}