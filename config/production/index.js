const fs = require('fs');
module.exports = {
    httpConf: {
        isSSL: true,
        certificate: {
            // key: fs.readFileSync('localhost-privkey.pem'),
            // cert: fs.readFileSync('localhost-cert.pem')
        }
    }
}; 