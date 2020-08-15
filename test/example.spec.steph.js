const test = require('ava')
const example = require('../src/example.steph')

test('example works', t => {
    t.deepEqual(example(4)(30)(20), 50)
})
