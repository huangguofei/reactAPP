const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/xxx', {
            target: 'http://wanzhans.com:81/',
            changeOrigin: true,
            pathRewrite: {
                // '^/api': '',
            }
        }))
    // app.use()
}