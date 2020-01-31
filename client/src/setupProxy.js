const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
    app.use(proxy('/google/oauth', { target: 'http://localhost:4000' }));
    app.use(proxy('/auth/google/callback', { target: 'http://localhost:4000' }));
    app.use(proxy('/api/**', { target: 'http://localhost:4000' }));
};