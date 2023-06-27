const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mernsocialmedia-production.up.railway.app/',
      changeOrigin: true,
    })
  );
};