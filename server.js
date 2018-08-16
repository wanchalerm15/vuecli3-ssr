const fs = require('fs');
const path = require('path');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
    template: `
    <!DOCTYPE html>
    <html lang="en">
      <head><title>Hello</title></head>
      <body>
        <!--vue-ssr-outlet-->
      </body>
    </html>`
});

const context = {
    url: '/',
    state: {}
};

renderer.renderToString(context, (err, html) => {
    console.log(html);
});