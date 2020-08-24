const pairWith = flip(pair)

const tripleRange = n => range(n - 1, n + 2)

const makeBoard = cells => {
    const width = head(cells).length
    const height = cells.length

    const inBounds = ([x, y]) => y >= 0 && x >= 0 && y < height && x < width

    const rawGet = ([x, y]) => cells[y][x]

    const rawNeighbors = ([x, y]) => {
        const allCoordinates = chain(
            row => map(pairWith(row), tripleRange(x)),
            tripleRange(y)
        )
        const relevant = filter(inBounds, allCoordinates)
        return map(rawGet, without([[x, y]], relevant))
    }

    return {
        get: ifElse(inBounds, rawGet, always(null)),
        getNeighbors: ifElse(inBounds, rawNeighbors, always([]))
    }
}

module.exports = {
    makeBoard
}
