const path = require("path");

module.exports = {
    mode: 'development',
    devtool: "inline-source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js',
    },
    devServer: {
        hot: true,
        contentBase: path.resolve("./dist"),
        compress: true,
        port: 8564,
    },
    performance: {
        maxAssetSize: 1000000,
        maxEntrypointSize: 1000000,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
        ],
    },
};