const makeBoard = cells => {
    const width = head(cells).length
    const height = cells.length
    const inBounds = ([x, y]) => y >= 0 && x >= 0 && y < height && x < width
    const rawGet = ([x, y]) => cells[y][x]
    const rawNeighbors = ([x, y]) => {
        const rowAbove = [
            [x - 1, y - 1],
            [x, y - 1],
            [x + 1, y - 1]
        ]
        const sameRow = [
            [x - 1, y],
            [x + 1, y]
        ]
        const rowBelow = [
            [x - 1, y + 1],
            [x, y + 1],
            [x + 1, y + 1]
        ]
        const allCoordinates = [...rowAbove, ...sameRow, ...rowBelow]
        const relevant = filter(inBounds, allCoordinates)
        return map(rawGet, relevant)
    }
    return {
        get: ifElse(inBounds, rawGet, always(null)),
        getNeighbors: ifElse(inBounds, rawNeighbors, always([]))
    }
}

module.exports = {
    makeBoard
}
