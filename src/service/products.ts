import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export async function getProducts(): Promise<Product[]> {
  // json 파일 읽어오기
  // 먼저 파일이 어디에 있는지에 대해서 경로를 만들어 줘야함
  // node에서 제공하는 path를 사용
  const filePath = path.join(process.cwd(), "data", "products.json");
  // process.cwd()는 노드에서 제공하는 현재 경로, 'data'는 내가 만든 data 폴더를 의미
  // 'products.json'는 data 폴더 안에 있는 products.json 파일을 의미
  // 이것들을 조합해야함

  // 다음으로 파일을 읽어 와야함
  // 노드에서 제공하는 파일 입출력 가능하게 해주는 모듈을 사용
  const data = await fs.readFile(filePath, "utf-8"); // 'utf-8'는 인코딩 방식을 지정한 것
  // fs는 promise를 의미 따라서 비동기 처리를 해줘야함
  return JSON.parse(data);
  // data를 json 형식으로 변환
}

export async function getProduct(id: string): Promise<Product | undefined> {
  // Promise<Product | undefined> promise를 리턴할건데 Product이 있으면 Product 정보를 줄거고
  // product가 없으면 undefined를 리턴할 수 있는 프로미스 라는 의미

  const products = await getProducts(); // 모든 제품의 정보를 일단 받아옴
  return products.find((item) => item.id === id);
}
