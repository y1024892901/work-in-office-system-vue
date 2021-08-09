let proxyObj = {}

proxyObj['/'] = {
  //websocket
  ws: false,
  target: 'http://localhost:8222',
  changeOrigin: true,
  //不重新请求地址
  pathRewrite: {
    '^/': '/'
  }
}

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: proxyObj
  }
}