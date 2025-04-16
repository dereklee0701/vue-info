const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,  // 문법 ,언어 체크 
  // pages:{
  //   index:{
  //     entry:'src/main.js' // 최초실행
  //   }
  // }
  // 1번 방법
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  devServer: {
    proxy: {
      '^/user': {
        target: 'http://localhost:5000/',
        ws: true,
        changeOrigin: true,
        pathRewrite:{'^/user':''}
      },
      '^/car': {
        target: 'http://localhost:5001/',
        ws: true,
        changeOrigin: true,
        pathRewrite:{'^/car':''}
      }
    }
  }
})
