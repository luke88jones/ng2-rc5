"use strict";

const helpers = require("./config/helpers");
const webpack = require('webpack');

let config = {
    entry: {
        "polyfills": helpers.root("/src/polyfills.browser.ts"),
        "ng2-rc5": helpers.root("/src/main.ts"),
    },
    output: {
        path: helpers.root("/dist/js"),
        filename: "[name].bundle.js",
        sourceMapFilename: '[name].map'
    },
    modulesDirectories: ['node_modules'],
    devtool: "source-map",
    resolve: {
        extensions: ["", ".ts", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                include: [
                    helpers.root("src/main.ts"),
                    helpers.root("src/app"),
                    helpers.root("src/polyfills.browser.ts"),
                ]
            },
            {
                test: /\.html$/,
                loader: "raw-loader",
                exclude: [helpers.root("src/index.html")]
            }
        ],
    },
    plugins: []
};

let minimize = process.argv.indexOf('--minimize') !== -1;

if (minimize) {
    config.output.filename = "ahc-key-single-select.min.js"
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config; 