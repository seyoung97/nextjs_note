import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";

export const revalidate = 3; // revalidate this page every 3 seconds

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetaData({ params }: Props) {
  return {
    title: `${params.slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  const product = await getProduct(slug);
  console.log(product?.image);

  if (!product) {
    notFound();
  }
  return (
    <>
      <h1> {product.name} 소개 페이지!</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width={300}
        height={500}
      />
    </>
  );
}
// public > images 에 있는 사진들 사용할 때
// /images/(파일 이름) 형식임!

// 페이지 미리 생성하는 함수
export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
