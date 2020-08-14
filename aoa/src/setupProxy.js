const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://wanzhans.com:81/',
            changeOrigin: true,
            pathRewrite: {
                // '^/api': '',
            }
        })
    )
    // app.use(
    //     createProxyMiddleware('/', {
    //         target: 'http://wanzhans.com:81/',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             // '^/api': '',
    //         }
    //     })
    // )
}