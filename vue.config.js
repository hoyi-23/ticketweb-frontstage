const path = require('path')
function resolve(dir){
  return path.join(__dirname)
}
module.exports = {
    // publicPath 為 project-name，根目錄地址為上傳的網域
    publicPath: process.env.NODE_ENV === 'production' ? '/ticketweb-frontstage/' : '/' ,
    //輸出
    outputDir: "dist",
    assetsDir: "static",
    chainWebpack: config => {
        config.module
          .rule("image")
          .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
          .use('file-loader')
          .loader('file-loader')
          .options({name: "[name]"})
        // 先刪除預設的svg配置
        config.module.rules.delete("svg")
        // 新增 svg-sprite-loader 設定
        config.module
          .rule("svg-sprite-loader") 
          .test(/\.svg$/)
          .include
          .add(resolve("src/assets/icon"))
          .end()
          .use("svg-sprite-loader")
          .loader("svg-sprite-loader")
          .options({ symbolId: "[name]" })
        // 修改 images-loader 配置
        config.module
          .rule("images")
          .exclude.add(resolve("src/assets/icon"))
      },
      
};