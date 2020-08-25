const test = require('ava')
const { getCell, getNeighbors, getCoordinates } = require('../src/conway.steph')

const [tt, ff] = [true, false]
const Cells = [
    [ff, tt, ff],
    [tt, ff, tt],
    [ff, tt, ff]
]

test('get returns value', t => {
    const cell = getCell(Cells)
    t.deepEqual(cell([0, 0]), ff)
    t.deepEqual(cell([1, 1]), ff)
    t.deepEqual(cell([4, 4]), null)
})

test('neighbors', t => {
    const neighbors = getNeighbors(Cells)
    t.deepEqual(neighbors([0, 0]), [tt, tt, ff])
    t.deepEqual(neighbors([2, 2]), [ff, tt, tt])
    t.deepEqual(neighbors([1, 1]), [ff, tt, ff, tt, tt, ff, tt, ff])
})

test('coordinates', t => {
    t.deepEqual(getCoordinates(Cells), [
        [0, 0],
        [1, 0],
        [2, 0],

        [0, 1],
        [1, 1],
        [2, 1],

        [0, 2],
        [1, 2],
        [2, 2]
    ])
})
