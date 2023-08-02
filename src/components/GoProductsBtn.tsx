"use client";

import { useRouter } from "next/navigation";

// onClick 같은 이벤트 처리는 서버컴포넌트에서 할 수 없기 때문에
// client 컴포넌트로 따로 만들어야함

export default function GoProductsBtn() {
  const router = useRouter();
  // 이경우에는 redirect 시키는 경우가 아니라
  // 그냥 products page로 이동하는 것이기 때문에
  // next에서 제공해주는 router를 사용하면 된다

  return (
    <button
      onClick={() => {
        router.push("/products");
      }}
    >
      제품 페이지로 이동
    </button>
  );
}
