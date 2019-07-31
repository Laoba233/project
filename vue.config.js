module.exports = {
  lintOnSave: false,
  devServer: {
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    proxy: {
      '/api': {
          target: 'http://192.168.1.188:12/api',  // target host
          ws: true,  // proxy websockets 
          changeOrigin: true,  // needed for virtual hosted sites
          pathRewrite: {
              '^/api': ''  // rewrite path
          }
      },
    } 
}
}
