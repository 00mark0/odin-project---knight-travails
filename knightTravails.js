function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const queue = [[start, [start]]]; // each element is [position, path]
  const visited = new Set([start.toString()]);

  while (queue.length > 0) {
    const [currentPos, path] = queue.shift(); // dequeue

    if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((p) => console.log(p));
      return path;
    }

    moves.forEach(([dx, dy]) => {
      const newPos = [currentPos[0] + dx, currentPos[1] + dy];
      if (
        newPos[0] >= 0 &&
        newPos[0] < 8 &&
        newPos[1] >= 0 &&
        newPos[1] < 8 &&
        !visited.has(newPos.toString())
      ) {
        visited.add(newPos.toString());
        queue.push([newPos, [...path, newPos]]); // enqueue new position with updated path
      }
    });
  }

  console.log("No path found.");
}

// example
knightMoves([3, 3], [4, 3]);
knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
