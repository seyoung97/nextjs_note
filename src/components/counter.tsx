// 클라이언트 컴포넌트는 최대한 꼭 필요한 부분을 잘게 나눠서
// 만드는 것이 중요하다
"use client";
// 컴파일할 때 에러가 나지 않도록 클라이언트 컴포넌트라는 것을 미리 명시
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>count up</button>
    </div>
  );
}
