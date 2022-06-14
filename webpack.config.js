module.exports = {
    entry: './main.js',
    output: {
        filename: 'App.js'
    },
    node: {
        fs: 'empty',
        net: 'empty',
        child_process: 'empty',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        fallback: {
            "child_process": false,
            "os": false,
            "stream": false,
            "path": false,
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};