
var request = require('superagent');
var defaults = require('defaults');

/**
 * Expose the `scrape`.
 */

module.exports = scrape;

/**
 * Return a WebKnox proxies API.
 *
 * @param {String} apiKey
 * @param {Object} options
 * @return {Function}
 */

function scrape (apiKey, options) {
  if (!apiKey) throw new Error('Webknox proxies requires an API key.');
  options = defaults(options, {
    maxResponseTime: 10,
    batchSize: 10,
    endpoint: 'https://webknox-proxies.p.mashape.com/proxies/newMultiple'
  });

  return function (callback) {
    request
      .get(options.endpoint)
      .query({ maxResponseTime: options.maxResponseTime, batchSize: options.batchSize })
      .set('X-Mashape-Authorization', apiKey)
      .end(function (err, res) {
        if (err) return callback(err);
        var proxies = res.body.map(function (item) {
          return 'http://' + item.proxy;
        });
        callback(null, proxies);
      });
  };
}
