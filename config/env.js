const productionEnv = require('./production');
const developmentEnv = require('./development');

module.exports = Object.assign({
    dist: './public',
    port: 8443    
}, process.env.NODE_ENV === 'prod' ? productionEnv : developmentEnv);