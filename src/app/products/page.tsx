import Link from "next/link";
import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowArticle";
import Image from "next/image";
import clothesImage from "../../../public/images/clothes.jpg";

export const revalidate = 3; // revalidate this page every 3 seconds

export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts();
  // getProducts가 promise를 return 하기 때문에 비동기 처리를 해야함

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image
        src={clothesImage}
        alt="제품 소개 이미지"
        priority
        width={500}
        height={400}
      />
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link href={`products/${product.id}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
      <MeowArticle />
    </>
  );
}

// Next에서 제공하는 Image 태그는 최적화를 통해 사진파일의 크기를 줄이고
// 브라우저가 보이는 화면 사이즈에 따라 이미지 사이즈를 설정해준다.
// image 태그에 priority를 설정하면 next가 최우선으로 그 이미지를 다운로드 받음
