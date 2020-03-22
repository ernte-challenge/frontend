const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const proxyContexts = {
    react: {
        target: 'http://localhost:3000',
        //changeOrigin: true
    },
    api: {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/',
        }
        //changeOrigin: true
    }
};
// https://expressjs.com/en/4x/api.html#app.use
const app = express();

// Middleware functions are executed sequentially, therefore the order of middleware inclusion is important.

app.use('/api', createProxyMiddleware(proxyContexts.api));
app.use(createProxyMiddleware('ws://localhost:3000'));
app.use(createProxyMiddleware(proxyContexts.react));

app.listen(3100);
