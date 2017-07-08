const path = require('path')
const projectRoot = path.resolve(__dirname, './components')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssLoaders = function (loaders) {
  if (process.env.NODE_ENV === 'production') {
    return ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: loaders.slice(1)
    })
  } else {
    return loaders
  }
}

module.exports = {
	title: 'Aircos',
	getComponentPathLine(componentPath) {
		const name = path.basename(componentPath, '.js');
		return `import { ${name} } from 'air-ui';`;
	},
  sections: [
		{
			name: 'Components',
			components: './components/**/[A-Z]*.js',
		}
  ],
  theme: {
    color: {
      link: '#b9b2d0',
	    sidebarBackground: '#342c3e',
      baseBackground: '#fff',
      base: '#2f2936',
      border: '#e2dee6',
      linkHover: '#fff'
    },
    sidebarWidth: 250
  },
  styles: {
    Logo: {
      logo: {
        color: 'rgba(255,255,255,.9)',
        'text-align': 'center'
      }
    },
		Markdown: {
      table: {
        border: '1px solid #e9e9e9'
      },
			th: {
				padding: '8px 16px',
				background: '#f7f7f7'
			},
      tr: {
        border: '1px solid #e9e9e9'
      },
      td: {
        'border-left': '1px solid #e9e9e9',
        padding: '8px 16px'
      }
		}
  },
	webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'eslint-loader',
          enforce: "pre",
          include: projectRoot,
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          include: projectRoot,
        },                  
        {
          test: /\.css$/,
          use: cssLoaders(['style-loader', 'css-loader', 'postcss-loader'])
        },      
        {
          test: /\.less$/,
          use: cssLoaders(['style-loader', 'css-loader', 'postcss-loader', 'less-loader'])
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader'
          // query: {
          //   limit: 10000,
          //   name: 'fonts/[name].[hash:7].[ext]'
          // }
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('css/[name].[contenthash].css'),
    ]
	}
}
