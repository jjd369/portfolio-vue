const path = require('path')

module.exports = {
    outputDir: 'docs',
    publicPath: '/portfolio-vue',
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/scss/common.scss";`
            }
        }
    }
}