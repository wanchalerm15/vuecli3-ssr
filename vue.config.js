const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const nodeExternals = require('webpack-node-externals');

let configBuilder = {};
switch (process.env.ENV_TARGET) {
    case 'node':
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
                plugins: [
                    new VueSSRServerPlugin()
                ]
            }
        };
        break;
    default:
        configBuilder = {
            configureWebpack: {
                entry: './src/entry-client.js'
            }
        };
        break;
}
module.exports = configBuilder; 