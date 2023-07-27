import Link from "next/link";
import { getProducts } from "@/service/products";

export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts();
  // getProducts가 promise를 return 하기 때문에 비동기 처리를 해야함
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link href={`products/${product.id}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
