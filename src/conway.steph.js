const pairWith = flip(pair)

const tripleRange = n => range(n - 1, n + 2)

const makeBoard = cells => {
    const width = head(cells).length
    const height = cells.length

    const inBounds = ([x, y]) => y >= 0 && x >= 0 && y < height && x < width

    const rawGet = ([x, y]) => cells[y][x]

    const rawNeighbors = ([x, y]) => {
        const makeRow = y => map(pairWith(y), tripleRange(x))
        const allCoordinates = chain(makeRow, tripleRange(y))
        const relevant = pipe(filter(inBounds), without([[x, y]]))
        return map(rawGet, relevant(allCoordinates))
    }

    return {
        get: ifElse(inBounds, rawGet, always(null)),
        getNeighbors: ifElse(inBounds, rawNeighbors, always([])),
        coordinates: () =>
            chain(y => map(pairWith(y), range(0, width)), range(0, height))
    }
}

const rawGet = (board, [x, y]) => board[y][x]

const inBounds = (board, [x, y]) => {
    const height = board.length
    const width = head(board).length
    return y >= 0 && x >= 0 && y < height && x < width
}

const getCell = board => ifElse(inBounds(board), rawGet(board), always(null))

module.exports = {
    getCell,
    makeBoard
}
