import Link from "next/link";
import { getProducts } from "@/service/products";
import styles from "./page.module.css";

export const revalidate = 3; // revalidate this page every 3 seconds

export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts();
  // getProducts가 promise를 return 하기 때문에 비동기 처리를 해야함

  // fetch 사용
  // ssg이기 때문에 revalidate 설정을 하지 않으면 서버에서 build할 때 fetch 한뒤 업데이트 하지 않음
  const res = await fetch("https://meowfacts.herokuapp.com", {
    next: { revalidate: 3 },
    // next 키를 사용해서 fetch 내에서 revalidate를 설정할 수 있음
    // revalidate를 0으로 설정하면 요청을 할 때 마다 fetch를 함. 즉 SSR이 됨

    // next 말고 cache라는 방법도 있음
    // cache 에서 기본 설정 값은 force-cache이고 SSG처럼 작동함
    // no-store는 SSR 캐시를 하지 않기 때문에 요청이 올 때 마다 fetch
  });
  const data = await res.json();
  const factText = data.data[0];
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
      <article className={styles.article}>{factText}</article>
    </>
  );
}
