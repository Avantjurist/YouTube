
const path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, './public/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.json', '.coffee']
    },
    devtool: "source-map"
};
