module.exports = {
    baseUrl: '/', //根路径
    outputDir: 'dist', //构建输出目录
    assetsDir: 'assets', //静态资源目录
    lintOnSave: false, //是否开启eslint保存检测，有效值 true | false | 'error'
    devServer: {
        open: true, //是否主动打开浏览器
        host: '127.0.0.1', // 本地主机地址
        port: 8080, //端口号
        https: false, //是否启用https
        hotOnly: false, // 热模块更新
        proxy: {
            // 配置跨域
            '/api': {
                target: "http://10.10.121.121:7100/",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}