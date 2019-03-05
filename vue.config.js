// vue.config.js
module.exports = {
    assetsDir:'mp',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://zyttest.vrdete.com/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                  }
            },
        }
    }
}