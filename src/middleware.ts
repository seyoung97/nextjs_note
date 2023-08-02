// middleware는 어플리케이션의 문지기 같은 존재이다.
// 어플리케이션에서 공통적으로 수행해야하는 작업을
// page에 접근하기 전에 문지기처럼 중간에서 한번에 검사하거나 작업을 진행하는 역할을 한다.
// 들어오는 모든 요청에 대해서 middleware 함수가 실행된다.
// 예를 들어 어플리케이션에 5개의 페이지가 있는데 그 중 3개의 페이지가 로그인을 해야만 접근이 가능한 페이지라면
// 각 page 마다 로그인 여부를 확인하는 것이 아니라 middleware에서 확인한 후
// 접근을 가능하게 하거나 로그인 페이지로 redirect 시키는 것이다.

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("미들웨어가 실행되고 있음!");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    //request의 url이 /products/1004로 시작하면
    console.log("미들웨어 - 경로를 리다이렉팅함!");
    return NextResponse.redirect(new URL("/products", request.url));
    // NextResponse의 redirect를 이용해서
    // 새로운 경로로 갈건데 경로는 /products로 갈거고
    // base url은 request에 온 기존의 base url을 따라가도록 함
  }
}

// 모든 페이지에서 미들웨어를 사용하면 성능이 저하될 수도 있음
// 특정 페이지에서만 사용 할 수 있는 방법도 있음
export const config = {
  matcher: ["/products/:path*"],
  // matcher 안의 배열로 , 원하는 경로에만 middle ware가 작동하도록 설정 가능
  // 위의 경우 /products 와 /products/(...) products 뒤에 뭐가 있는 경로일 경우 작동하도록 설정한 것
};
