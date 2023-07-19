import Link from "next/link";

const products = ["shirt", "pants", "skirt", "shoes"];

export default function ProductsPage() {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product}>
              <Link href={`products/${product}`}>{product}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
