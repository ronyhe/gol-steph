const test = require('ava')
const { makeBoard } = require('../src/conway.steph')

const [tt, ff] = [true, false]
const Board = makeBoard([
    [ff, tt, ff],
    [tt, ff, tt],
    [ff, tt, ff]
])

test('get returns value', t => {
    const cell = (x, y) => Board.get([x, y])
    t.deepEqual(cell(0, 0), ff)
    t.deepEqual(cell(1, 1), ff)
    t.deepEqual(cell(4, 4), null)
})

test('neighbors', t => {
    const neighbors = (x, y) => Board.getNeighbors([x, y])
    t.deepEqual(neighbors(0, 0), [tt, tt, ff])
    t.deepEqual(neighbors(2, 2), [ff, tt, tt])
    t.deepEqual(neighbors(1, 1), [ff, tt, ff, tt, tt, ff, tt, ff])
})
