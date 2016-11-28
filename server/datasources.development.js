'use strict';

module.exports = {
  "mongoDs": {
    "host": process.env.OPENSHIFT_MONGODB_DB_HOST,
    "port": process.env.OPENSHIFT_MONGODB_DB_PORT,
    "url": "",
    "database": "comp155assignment3",
    "password": "LHUNn3hCqPnD",
    "name": "mongoDs",
    "user": "admin",
    "connector": "mongodb"
  }
}
