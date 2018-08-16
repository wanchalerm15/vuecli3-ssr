const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const nodeExternals = require('webpack-node-externals');

let configBuilder = {};
switch (process.env.ENV_BUILD) {
    case 'server':
        configBuilder = {
            configureWebpack: {
                entry: './src/entry-server.js',
                target: 'node',
                devtool: 'source-map',
                output: {
                    libraryTarget: 'commonjs2'
                },
                externals: nodeExternals({
                    whitelist: /\.css$/
                }),
                optimization: undefined,
                plugins: [
                    new VueSSRServerPlugin()
                ]
            }
        };
        break;

    default:
        configBuilder = {
            indexPath: 'index.template.html',
            configureWebpack: {
                entry: './src/entry-client.js'
            }
        };
        break;
}
module.exports = configBuilder; 