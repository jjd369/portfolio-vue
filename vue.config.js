const path = require('path')

module.exports = {
    outputDir: 'docs',
    publicPath: '/new-portfolio/main',
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
                data: `@import "@/assets/scss/common.scss";`
            }
        }
    }
}