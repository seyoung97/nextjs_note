import Image from "next/image";
import styles from "./page.module.css";
import os from "os"; // 운영체제를 확인할 수 있는 노드 APIs
import Counter from "@/components/counter";

// app 폴더 내의 컴포넌트들은 기본적으로 서버컴포넌트로 설정되어있음

export default function Home() {
  console.log("어디서 실행돼? - 서버");
  // 서버에서 실행되는 컴포넌트이기 때문에 바라우저에 출력되지 않고 빌드할 때 출력됨
  console.log(os.hostname()); // jeongseyeong-ui-MacBookPro.local
  // 노드에서 제공하는 api이기 때문에 서버에서만 실행되고 클라이언트에서는 실행안됨

  // 서버 컴포넌트이기 때문에 브라우저 단에서 일어나는 일들을 처리할 수 없음
  //클릭 처리, 상태관련된 것, 컴포넌트가 마운트될 때 사용하는 useEffect등을 할 수 없음
  // useState를 사용하면 컴파일 에러가 남

  return (
    <>
      <h1>홈페이지다! ver3</h1>
      <Image
        src="https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
        alt="매장 이미지"
        width={600}
        height={400}
      />
      <Counter />
    </>
  );
}

// Next에서 제공하는 Image 태그를 사용할 때 src를 url로 지정하기 위해서는
// next.config에서 설정을 해줘야한다
// 그리고 로컬 이미지를 사용할 떄와 달리 필수로 width 값과 height 값을 설정해줘야 한다
