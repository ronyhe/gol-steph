const pairWith = flip(pair)

const tripleRange = n => range(n - 1, n + 2)

const height = length

const width = pipe(head, length)

const inBounds = (board, [x, y]) => {
    return y >= 0 && x >= 0 && y < height(board) && x < width(board)
}

const rawGet = (board, [x, y]) => board[y][x]

const rawNeighbors = (board, [x, y]) => {
    const makeRow = y => map(pairWith(y), tripleRange(x))
    const allCoordinates = chain(makeRow, tripleRange(y))
    const relevant = pipe(filter(inBounds(board)), without([[x, y]]))
    return map(rawGet(board), relevant(allCoordinates))
}

const getNeighbors = board =>
    ifElse(inBounds(board), rawNeighbors(board), always([]))

const getCell = board => ifElse(inBounds(board), rawGet(board), always(null))

const getCoordinates = board =>
    chain(
        y => map(pairWith(y), range(0, width(board))),
        range(0, height(board))
    )

module.exports = {
    getCell,
    getNeighbors,
    getCoordinates
}
