function isvalid(x,y){
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function possibleMoves(x,y){
    const moves = [
        [x + 2, y + 1],
        [x + 2, y - 1],
        [x - 2, y + 1],
        [x - 2, y - 1],
        [x + 1, y + 2],
        [x + 1, y - 2],
        [x - 1, y + 2],
        [x - 1, y - 2],
    ];

    return moves.filter(([nx, ny]) => isvalid(nx, ny));
}

function KnightMoves(start, end){
    if(start[0] === end[0] && start[1] === end[1]){
        return start;
    }

    const queue = [[start, [start]]]
    const visited = new Set();
    visited.add(`${start[0]},${start[1]}`);

    while(queue.length > 0){
        const [[x, y], path] = queue.shift();

        for (const [nx, ny] of possibleMoves(x, y)) {
            if (nx === end[0] && ny === end[1]) {
                return [...path, [nx, ny]];
            }

            if (!visited.has(`${nx},${ny}`)) {
                visited.add(`${nx},${ny}`);
                queue.push([[nx, ny], [...path, [nx, ny]]]);
            }
        }
    }
}

function testKnightMoves(start, end) {
    const path = KnightMoves(start, end);
    console.log(`=> You made it in ${path.length - 1} moves!  Here's your path:`);
    path.forEach((pos) => console.log(`    [${pos}]`));
    console.log("");
}

testKnightMoves([0, 0], [1, 2]);
testKnightMoves([0, 0], [3, 3]);
testKnightMoves([3, 3], [0, 0]);
testKnightMoves([0, 0], [7, 7]);
testKnightMoves([3, 3], [4, 3]);