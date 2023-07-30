export default function ProductsLoading() {
  return <div>로딩중 입니다... 🥺</div>;
}

// 리액트 서스펜ㄴ스를 사용
// 전체 골격을 먼저 사용자에게 보여주고
// 로딩 되는데 상대적으로 오래 걸리는 컴포넌트를 준비하는 동안
// 로딩 UI를 보여주는 것
// 이렇게 하면 사용자가 어떤 것이 로딩 중인지 인지할 수 있음

// 동작 원리
// 경로 폴더에 loading.tsx를 만들면
// 실제로 레이아웃 파일에서 Page가 보여주는 그 부분을
// Suspense 테그로 감싸줌 <Suspense fallback={<Loading />}> <Page /> </Suspense>
// Suspense는 리액트에서 만든 것, Suspense 안에 있는 것이 준비되기 전에
// fallback으로 명시한 컴포넌트를 보여주고 나서
// Page가 준비되는 대로 보여줌

// 한계점
// 해당 경로에 있는 폴더에 한개만 정의할 수 있음

// 극복
// suspense boundary
