import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function GET() {
    cookies().set('name', 'lee');

    return NextResponse.json('ok');
}