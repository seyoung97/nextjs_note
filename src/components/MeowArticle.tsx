"use client";
// client 컴포넌트임을 명시
import { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";

export default function MeowArticle() {
  const [text, setText] = useState("데이터 준비중...");

  useEffect(() => {
    // fetch 사용
    // ssg이기 때문에 revalidate 설정을 하지 않으면 서버에서 build할 때 fetch 한뒤 업데이트 하지 않음
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}
