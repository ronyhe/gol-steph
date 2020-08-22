const R = require("ramda");

const makeBoard = R.curry(cells => {
  const width = R.head(cells).length;
  const height = cells.length;
  const inBounds = R.curry(([x, y]) => y < height && x < width);
  const rawGet = R.curry(([x, y]) => cells[y][x]);
  const rawNeighbors = R.curry(([x, y]) => {
    const rowAbove = [[x - 1, y - 1], [x, y - 1], [x + 1, y - 1]];
    const sameRow = [[x - 1, y], [x, y], [x + 1, y]];
    const rowBelow = [[x - 1, y + 1], [x, y + 1], [x + 1, y + 1]];
    const allCoordinates = [...rowAbove, ...sameRow, ...rowBelow];
    const relevant = R.filter(inBounds, allCoordinates);
    return R.map(rawGet, relevant);
  });
  const getCell = R.ifElse(inBounds, rawGet, R.always(null));
  const getNeighbors = R.ifElse(inBounds, rawNeighbors, R.always([]));
  return {
    getCell,
    getNeighbors
  };
});
module.exports = {
  makeBoard
};