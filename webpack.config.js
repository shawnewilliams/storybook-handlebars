const path = require('path');

var config = {
    // TODO: Add common Configuration
    module: {},
};



var config1 = Object.assign({}, config, {
    watch: true,
    
    entry: {'dist/css': './assets/src/scss/styles.scss',},
	output: {
		path: path.resolve(__dirname, 'assets/dist/css'),
		filename: '../scripts/main.js',
	},
	module: {
		rules: [
			{
                test: /\.scss$/,
                // exclude: '/assets/scripts/main.js',
				use: [
                    
					{
						loader: 'file-loader',
						options: {
                            name: 'style.css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
});

var config2 = Object.assign({}, config, {
    watch: true,
      entry: {'./assets/dist/scripts/main': './assets/src/scripts/main.js'},
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './assets/dist/scripts')
      },
    });

    module.exports = [
        config1      
    ];