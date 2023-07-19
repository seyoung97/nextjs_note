import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: Props) {
  if (params.slug == "nothing") {
    notFound();
  }
  return <h1>{params.slug} 소개 페이지!</h1>;
}

// 페이지 미리 생성하는 함수
export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
