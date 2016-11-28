'use strict';

module.exports = {
  "mongoDs": {
    "host": process.env.OPENSHIFT_MONGODB_DB_HOST,
    "port": process.env.OPENSHIFT_MONGODB_DB_PORT,
    "url": "",
    "database": "Ass3-Web-Bank",
    "password": process.env.OPENSHIFT_MONGODB_DB_PASSWORD,
    "name": "mongoDs",
    "user": process.env.OPENSHIFT_MONGODB_DB_USERNAME,
    "connector": "mongodb"
  }
}
