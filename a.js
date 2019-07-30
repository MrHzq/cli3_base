// // 公共代码抽离
// config.optimization = {
//     splitChunks: {
//         cacheGroups: {
//             vendor: {
//                 chunks: 'all',
//                 test: /node_modules/,
//                 name: 'vendor',
//                 minChunks: 1,
//                 maxInitialRequests: 5,
//                 minSize: 0,
//                 priority: 100
//             },
//             common: {
//                 chunks: 'all',
//                 test: /[\\/]src[\\/]js[\\/]/,
//                 name: 'common',
//                 minChunks: 2,
//                 maxInitialRequests: 5,
//                 minSize: 0,
//                 priority: 60
//             },
//             styles: {
//                 name: 'styles',
//                 test: /\.(sa|sc|c)ss$/,
//                 chunks: 'all',
//                 enforce: true
//             },
//             runtimeChunk: {
//                 name: 'manifest'
//             }
//         }
//     }
// }
