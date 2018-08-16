const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, './dist/index.html'), 'utf8');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
    template: template.replace('<div id=app></div>', '<!--vue-ssr-outlet-->')
});

const express = require('express');
const server = express();
server.use(express.static(path.join(__dirname, './dist')));
server.get('**', (req, res) => {
    const context = {
        url: req.url
    };
    renderer.renderToStream(context).pipe(res);
});
server.listen(3000, () => console.log('Server started.'))