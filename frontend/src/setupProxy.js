const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mernsocialmedia-production.up.railway.app',
      changeOrigin: true,
    })
  );
  
  app.use(
    '/api/post',
    createProxyMiddleware({
      target: 'https://mernsocialmedia-production.up.railway.app',
      changeOrigin: true,
    })
  );

  app.use(
    '/api/user',
    createProxyMiddleware({
      target: 'https://mernsocialmedia-production.up.railway.app',
      changeOrigin: true,
    })
  );

  app.use(
    '/api/feed',
    createProxyMiddleware({
      target: 'https://mernsocialmedia-production.up.railway.app',
      changeOrigin: true,
    })
  );
};
