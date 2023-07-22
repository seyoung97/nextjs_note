import Image from "next/image";
import styles from "./page.module.css";
import os from "os"; // 운영체제를 확인할 수 있는 노드 APIs

// app 폴더 내의 컴포넌트들은 기본적으로 서버컴포넌트로 설정되어있음

export default function Home() {
  console.log("어디서 실행돼?");
  // 서버에서 실행되는 컴포넌트이기 때문에 바라우저에 출력되지 않고 빌드할 때 출력됨
  console.log(os.hostname()); // jeongseyeong-ui-MacBookPro.local
  // 노드에서 제공하는 api이기 때문에 서버에서만 실행되고 클라이언트에서는 실행안됨

  // 서버 컴포넌트이기 때문에 상태관련된 것을 할 수 없음
  // useState를 사용하면 컴파일 에러가 남

  return <h1>홈페이지다!</h1>;
}
