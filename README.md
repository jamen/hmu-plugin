# hmu-plugin
> Plugin utilities for normalizing output

A small utility library for [`hmu`](https://github.com/jamen/hmu) plugins...  Used for normalizing log output, and shorthand functions for common tasks.

## Installation
```shell
$ npm install hmu-plugin
```

## Usage
```javascript
import plugin from 'hmu-plugin';
const foobar = plugin('foobar');

// require shorthand
const foobar = require('hmu-plugin')('foobar');
```

### `plugin(name)`
Create plugin utilities.  (Returns `util`)
 - `name` (`String`): Name of the plugin.

### `util.title()`
Log the plugin's title.

### `util.log(message)`
Log a message under the plugin's name.
 - `message` (`String`): Message to log.

### `util.warm(message)`
Log a warning under the plugin's name.
 - `message` (`String`): Message to log.

### `util.error(err)`
Log an error under the plugin's name.
 - `err` (`Error`): Error to log.

### `util.get(opts, [mod])`
A simple Promise wrapper for Node's `http.get`.
 - `opts` (`Object`, `String`): Options to pass to `http.get`.
```javascript
util.get(`http://.../${someting}`)then(req => {
  // ...
});
```

### `util.status(url, status)`
A quick HTTP GET status checking function using `util.get`.
 - `url` (`Object`, `String`): Options to pass to `util.get`.
 - `status` (`Number`): Status to compare.
```javascript
util.status(`http://registry.npmjs.org/${name}`, 404)
.then(available => ...);
```

## Credits
| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

  [avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
  [github]: https://github.com/jamen
