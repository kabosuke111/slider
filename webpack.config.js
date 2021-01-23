const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	entry: './src/index.ts',
	output: {
		path: `${__dirname}/dist`,
		filename: "main.js"
	},
	mode: "production",
	devServer: {
		contentBase: "dist",
		open: true
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader'
			},
			{
				test: /\.scss/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: "css-loader",
						options: {
							url: false,
							importLoaders: 2
						}
					},
					{
						loader: "sass-loader",
						options: {
						}
					}
				]
			}
		]
	},
	plugins: [
		// CSSファイルを外だしにするプラグイン
		new MiniCssExtractPlugin({
			// ファイル名を設定します
			filename: "style.css",
		}),
	],
	resolve: {
		extensions: [
			'.ts', '.js'
		]
	}
}