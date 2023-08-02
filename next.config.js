/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/deleted_forever",
        // source -> 여기로 접속하면
        destination: "/products",
        // destination에 적힌 주소로 redirect
        permanent: true,
        // 영원히 여기로 옮겨갔다는 의미
        // 이렇게 하면 서치엔진에 308 status를 보내주면서
        // 이페이지는 영원히 옮겨졌으니 너는 안심해도 캐시해도 된다는걸 알려줌
        // 즉, 다음에도 사용자가 source에 적힌 경로로 접속하면
        // 그냥 바로 destination에 적힌 주로를 보여주면 된다는 것을 알려주는 것
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false,
        // 영원히 옮겨간게 아니라 임시로 옮겼을 경우 false로 설정
      },
    ];
  },
};

module.exports = nextConfig;
