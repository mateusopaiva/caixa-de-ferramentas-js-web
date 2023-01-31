const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./js/index.js", // arquivo de entrada
    output: {
        path: path.resolve(__dirname, "dist"), // pasta de saida
        filename: "bundle.js", // nome do arquivo de saida
    },
    devServer: { static: "./dist" },// pasta de saida
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
        })
    ], // array de plugins
    module: {
        rules:[
            {
                test: /\.svg/, // extensaao do arquivo
                use: {
                    loader: "svg-url-loader",
                }
            },
        ]
    }, // objeto de configuracao do modulo
}