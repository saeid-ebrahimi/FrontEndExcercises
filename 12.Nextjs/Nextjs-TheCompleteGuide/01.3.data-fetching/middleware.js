import { NextResponse } from "next/server";

export function middleware(request){
    console.log(request);
    return NextResponse.next();
    // return NextResponse.redirect();
}

export const config = {
    matcher: '/news'
}