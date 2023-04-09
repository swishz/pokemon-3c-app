const path = require('path')

module.exports = {
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
        },
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    }
}