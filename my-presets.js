const path = require('path')

async function webpack(webpackConfig, options) {
    // Modify or replace config. Mutating the original reference object can cause unexpected bugs,
    // so in this example we replace.
    const { module = {} } = webpackConfig;
  
    return {
      ...webpackConfig,
      module: {
        ...module,
        rules: [
          ...(module.rules || []),
          {
            test: /\.s[ac]ss$/i,
            use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
            ],
          },
          // { 
          //     test: /\.handlebars$/, loader: "handlebars-loader",
          //     options: {
          //       knownHelpersOnly: false,
          //       // inlineRequires: /\/assets\/(:?images|audio|video)\//ig,
          //       // helperDirs: [path.join(__dirname, '/lib/hbs-helpers')],
          //       partialDirs: [__dirname, '/components'],
          //   },

          //   }
        ],
      },
    };
  }

  module.exports = { webpack };