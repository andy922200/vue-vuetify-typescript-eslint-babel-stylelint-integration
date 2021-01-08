module.exports = {
    publicPath: './',
    css: {
        extract: process.env.NODE_ENV !== 'production' ? undefined : {
            filename: '[name].css',
            chunkFilename: '[id].css'
        },
        sourceMap: true
    },
    configureWebpack: {
        devtool: 'source-map',
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000
            }
        },
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    },
    productionSourceMap: false,
    transpileDependencies: [
        'vuetify'
    ]
}
