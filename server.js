const fs = require('fs');
const path = require('path');
const express = require('express');
const server = express();

const template = fs.readFileSync(path.join(__dirname, './dist/index.template.html'), 'utf8');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
    template: template.replace('<div id=app></div>', '<!--vue-ssr-outlet-->')
});

server.use(express.static(path.join(__dirname, './dist')));

server.get('*', (req, res) => {
    renderer.renderToString({ url: req.url }, (error, html) => {
        if (!error) return res.status(200).end(html);
        else if (error.code === 404) return res.status(404).end('Page not found.');
        else return res.status(500).end(error.message);
    });
});
server.listen(3000, () => console.log('Server started.'))