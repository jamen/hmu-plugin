'use strict';

const chalk = require('chalk');

module.exports = function plugin(name) {
  return {
    // Log plugin title
    title: () => {
      console.log(`${chalk.grey('~')} ${chalk.green(name)}:`);
    },

    log: message => {
      console.log(`${chalk.green(name)} ${message}`);
    },

    // Log plugin warning
    warn: function warn(message) {
      this.log(`${chalk.yellow('warning:')} ${message}`);
    },

    // Log plugin error
    error: function error(err) {
      this.log(`${chalk.red(`${err.name.toLowerCase()}:`)} ${err.message}`);
    },

    // Simple http.request GET promise wrapper
    get: (opts, mod) => {
      const http = mod || require('http');
      return new Promise((resolve, reject) => {
        http.get(opts, resolve).on('error', reject);
      });
    },

    // Fast status checking
    status: function status(url, code, mod) {
      return this.get(url, mod).then(req => req.statusCode === code);
    },
  };
};
