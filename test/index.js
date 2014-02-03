
var assert = require('assert');
var webknox = require('..');

describe('proxies-webknox', function () {

  var proxies = webknox('9sq7gCx3msCST3iKifXsIWIoVSiVwbtr');

  it('should be able to query the proxies', function (done) {
    proxies(function (err, proxies) {
      if (err) return done(err);
      assert(Array.isArray(proxies));
      assert(proxies.length);
      done();
    });
  });
});