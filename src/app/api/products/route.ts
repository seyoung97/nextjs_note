import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";

// 특정한 경로에 GET, POST, PUT, DELETE등 과 같은 요청이 오면
// 그때 우리의 함수가 실행 될 수 있도록 만들 수 있음

export async function GET(request: Request) {
  const products = await getProducts();
  return NextResponse.json({ products });
}
