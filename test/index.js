const test = require('../lib')('test-plugin');

test.title();
test.warn('Hello world!');
test.error(new Error('Hello world!'));
test.status('http://registry.npmjs.org/hmu', 200).then(test.log);
