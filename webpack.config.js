const path = require("path");

module.exports = {
    entry: "./js/index.js", // arquivo de entrada
    output: {
        path: path.resolve(__dirname, "dist"), // pasta de saida
        filename: "bundle.js", // nome do arquivo de saida
    },
    devServer: { static: "./dist" },// pasta de saida
    plugins: [], // array de plugins
    module: {}, // objeto de configuracao do modulo
}