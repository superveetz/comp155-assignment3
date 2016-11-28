'use strict';

module.exports = {
  "restApiRoot": "/api",
  "host": process.env.OPENSHIFT_NODEJS_IP,
  "port": process.env.OPENSHIFT_NODEJS_PORT,
  "remoting": {
    "context": false,
    "rest": {
      "normalizeHttpPath": false,
      "xml": false
    },
    "json": {
      "strict": false,
      "limit": "100kb"
    },
    "urlencoded": {
      "extended": true,
      "limit": "100kb"
    },
    "cors": false,
    "handleErrors": false
  },
  "legacyExplorer": false
}
