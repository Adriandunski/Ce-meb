import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function GET() {
    const cooks = cookies().get('name');

    return NextResponse.json(cooks);
}