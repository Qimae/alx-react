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
        static: {
            directory: path.resolve('./dist'),
        },
        hot: true,
        port: 8564
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
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				use: [
					{
						loader: ['file-loader', 'image-webpack-loader'],
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
        ],
    },
};