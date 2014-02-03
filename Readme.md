
# proxies-webknox

  Query the public proxies list from [Webknox Proxies](https://www.mashape.com/webknox/Proxie). Primarily used as a proxies source list to [proxies](https://github.com/ivolo/proxies).


## Example

Get a list of public proxies:

```js
webknox('mashape_api_key')(function (err, proxies) {
  // ..
});
```

And integrate into [proxies](https://github.com/ivolo/proxies) as a source:

```js
var webknox = require('proxies-webknox');
var Proxies = require('proxies');

Proxies()
  .source(webknox('mashape_api_key'));
```

## API

#### webknox(apiKey, options)

  Create a new Webknox query instance with default options:

```js
{
  maxResponseTime: 10,
  batchSize: 10,
  endpoint: 'https://webknox-proxies.p.mashape.com/proxies/newMultiple'
}
```

## Licence

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```