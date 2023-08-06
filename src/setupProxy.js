const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // "/api1" 엔드포인트에 대한 프록시 설정
  app.use(
    '/api1',
    createProxyMiddleware({
      target: 'https://dapi.kakao.com',
      changeOrigin: true,
    })
  );

  // "/api2" 엔드포인트에 대한 프록시 설정
  app.use(
    '/api2',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
    })
  );
};
