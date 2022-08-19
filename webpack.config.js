const HtmlWebPack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, "css-loader"]
            },
            {
                test: /\.(png|jge?g|gif)$/,
                loader: "file-loader"
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebPack({
            title: "Devils app",
            //filename: "index.html",
            template: "./src/index.html"
        }),

        new MiniCssExtract({
            filename: "[name].css",
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                {
                    from: "./src/assets/",
                    to: "assets/"
                }
            ]
        })
    ]
}