/**
 * Created by IncWolf on 21.09.2016.
 */
module.exports = {
    entry: "./src/main.js" ,

    output: {
        filename: './build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    }
};