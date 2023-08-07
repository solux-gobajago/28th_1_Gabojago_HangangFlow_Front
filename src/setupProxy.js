const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // "/api1" 엔드포인트에 대한 프록시 설정
  app.use(
    '/v2',
    createProxyMiddleware({
      target: 'https://dapi.kakao.com',
      changeOrigin: true,
    })
  );

  // 백엔드
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
    })
  );
  app.use( //데이터 서버
    '/data',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
};
