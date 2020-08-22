const test = require('ava')
const { makeBoard } = require('../src/conway.steph')

test('get returns value', t => {
    const [T, F] = [true, false]
    const board = makeBoard([
        [F, T, F],
        [T, F, T],
        [F, T, F]
    ])
    const cell = (x, y) => board.get([x, y])
    t.deepEqual(cell(0, 0), F)
    t.deepEqual(cell(1, 1), F)
    t.deepEqual(cell(4, 4), null)
})
