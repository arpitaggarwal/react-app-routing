var path = require('path');

module.exports = {
    entry: './app/main.js',
    cache: true,
    debug: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/package/script.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
