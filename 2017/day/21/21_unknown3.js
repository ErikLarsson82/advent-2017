module.exports = [
    { input: "../.#", output: "##./#../..."},
    { input: ".#./..#/###", output: "#..#/..../..../#..#"},
    /*{ input: "../..", output: "#.#/###/#.#"},
    { input: "#./..", output: "..#/.../###"},
    { input: "##/..", output: ".../.##/###"},
    { input: ".#/#.", output: "#.#/##./.#."},
    { input: "##/#.", output: "#../#.#/..#"},
    { input: "##/##", output: "#.#/#../###"},
    { input: ".../.../...", output: ".###/..##/.#../###."},
    { input: "#../.../...", output: "##.#/.###/#.../##.#"},
    { input: ".#./.../...", output: "..../#.##/..../.#.#"},
    { input: "##./.../...", output: "..#./#.../#.../.###"},
    { input: "#.#/.../...", output: "..##/####/#.#./..##"},
    { input: "###/.../...", output: ".##./#.#./###./.#.."},
    { input: ".#./#../...", output: "#..#/..#./...#/#.#."},
    { input: "##./#../...", output: "##../.##./##.#/#..#"},
    { input: "..#/#../...", output: "#.##/.##./##.#/.###"},
    { input: "#.#/#../...", output: "...#/#.##/..#./##.."},
    { input: ".##/#../...", output: "#.#./..#./##.#/.#.#"},
    { input: "###/#../...", output: "#..#/...#/..#./##.#"},
    { input: ".../.#./...", output: ".#.#/#.../.##./.#.#"},
    { input: "#../.#./...", output: "#.#./.##./..../.#.#"},
    { input: ".#./.#./...", output: ".#../#.##/..##/..##"},
    { input: "##./.#./...", output: "..##/##.#/...#/..#."},
    { input: "#.#/.#./...", output: "...#/.##./####/.#.."},
    { input: "###/.#./...", output: "###./####/...#/####"},
    { input: ".#./##./...", output: "...#/.#.#/#.#./#.#."},
    { input: "##./##./...", output: "..../...#/#.#./...#"},
    { input: "..#/##./...", output: ".##./#.../##.#/.#.."},
    { input: "#.#/##./...", output: ".#../.#../...#/...."},
    { input: ".##/##./...", output: "..#./.##./####/.#.."},
    { input: "###/##./...", output: "##../.#.#/##../.#.."},
    { input: ".../#.#/...", output: "..#./.#../.#../.###"},
    { input: "#../#.#/...", output: "####/..../#..#/#..."},
    { input: ".#./#.#/...", output: "#.##/##../##.#/##.#"},
    { input: "##./#.#/...", output: "###./..../#.##/###."},
    { input: "#.#/#.#/...", output: "###./.#../#.#./#.#."},
    { input: "###/#.#/...", output: "...#/#..#/#.#./..##"},
    { input: ".../###/...", output: ".#../...#/...#/...."},
    { input: "#../###/...", output: "####/#.../##../.#.#"},
    { input: ".#./###/...", output: "...#/####/.##./#..#"},
    { input: "##./###/...", output: ".###/##.#/..#./.#.."},
    { input: "#.#/###/...", output: "####/###./.###/.###"},
    { input: "###/###/...", output: ".#.#/..##/..#./##.."},
    { input: "..#/.../#..", output: "#.../.###/###./...#"},
    { input: "#.#/.../#..", output: "..../#.../##../..#."},
    { input: ".##/.../#..", output: "####/####/...#/####"},
    { input: "###/.../#..", output: "#.../.#../#.#./#.#."},
    { input: ".##/#../#..", output: "##../..#./.#../##.#"},
    { input: "###/#../#..", output: "..../#..#/.###/.###"},
    { input: "..#/.#./#..", output: "...#/##../.##./##.."},
    { input: "#.#/.#./#..", output: "#.##/.###/#.#./##.#"},
    { input: ".##/.#./#..", output: "..../..../.#.#/#..#"},
    { input: "###/.#./#..", output: "##../.#.#/.#.#/####"},
    { input: ".##/##./#..", output: "#.##/##.#/####/...."},
    { input: "###/##./#..", output: "..../..##/#.#./.###"},
    { input: "#../..#/#..", output: "#.#./...#/#.##/.###"},
    { input: ".#./..#/#..", output: "####/#.##/.#../.###"},
    { input: "##./..#/#..", output: ".##./..#./.#.#/##.#"},
    { input: "#.#/..#/#..", output: ".#.#/#.##/##../#..."},
    { input: ".##/..#/#..", output: "..../.###/####/.#.."},
    { input: "###/..#/#..", output: "##.#/##.#/..##/.#.."},
    { input: "#../#.#/#..", output: "#.##/###./##../...."},
    { input: ".#./#.#/#..", output: "..../###./####/###."},
    { input: "##./#.#/#..", output: "##.#/#.##/##../#.##"},
    { input: "..#/#.#/#..", output: ".###/#.../.#../##.."},
    { input: "#.#/#.#/#..", output: "##../##.#/#.../.##."},
    { input: ".##/#.#/#..", output: "...#/..#./.###/##.#"},
    { input: "###/#.#/#..", output: "#.../#.##/..##/..##"},
    { input: "#../.##/#..", output: "#.##/#.../.##./##.."},
    { input: ".#./.##/#..", output: "#.#./#.../..##/.#.."},
    { input: "##./.##/#..", output: ".###/.#.#/####/.#.#"},
    { input: "#.#/.##/#..", output: "####/.#../##.#/.###"},
    { input: ".##/.##/#..", output: ".#../##.#/####/#.#."},
    { input: "###/.##/#..", output: "#.##/#.../...#/...."},
    { input: "#../###/#..", output: "###./.#.#/##../#..#"},
    { input: ".#./###/#..", output: "#..#/..##/..../...."},
    { input: "##./###/#..", output: "..#./#.../...#/###."},
    { input: "..#/###/#..", output: "##../..##/##../#.##"},
    { input: "#.#/###/#..", output: "..../..#./.###/##.."},
    { input: ".##/###/#..", output: "#..#/####/.#.#/.##."},
    { input: "###/###/#..", output: "###./#.##/##.#/.#.."},
    { input: ".#./#.#/.#.", output: "#.../####/#.#./.##."},
    { input: "##./#.#/.#.", output: "..##/..../.#.#/##.."},
    { input: "#.#/#.#/.#.", output: "####/..##/####/#..."},
    { input: "###/#.#/.#.", output: "##.#/#.#./.##./####"},
    { input: ".#./###/.#.", output: ".#.#/.#.#/##.#/###."},
    { input: "##./###/.#.", output: ".#../###./#.##/#..."},
    { input: "#.#/###/.#.", output: "#.../.###/.#../.#.."},
    { input: "###/###/.#.", output: "#.#./.##./.###/####"},
    { input: "#.#/..#/##.", output: ".#../#..#/###./#.##"},
    { input: "###/..#/##.", output: "#.#./####/###./###."},
    { input: ".##/#.#/##.", output: ".#.#/...#/..../#.##"},
    { input: "###/#.#/##.", output: "...#/..../#.##/####"},
    { input: "#.#/.##/##.", output: "##../.#../.#.#/##.."},
    { input: "###/.##/##.", output: "#.../#.#./#.#./#.#."},
    { input: ".##/###/##.", output: "..../#.##/#.##/..##"},
    { input: "###/###/##.", output: "####/##.#/#..#/.##."},
    { input: "#.#/.../#.#", output: "##.#/.#.#/####/.##."},
    { input: "###/.../#.#", output: "#..#/.#.#/#.../#..#"},
    { input: "###/#../#.#", output: "..##/###./.###/..##"},
    { input: "#.#/.#./#.#", output: "#.##/#.#./##../...#"},
    { input: "###/.#./#.#", output: "..#./.###/..##/#..."},
    { input: "###/##./#.#", output: "#.../...#/..##/.###"},
    { input: "#.#/#.#/#.#", output: "#..#/.#../...#/#..#"},
    { input: "###/#.#/#.#", output: "###./#.../##../.##."},
    { input: "#.#/###/#.#", output: "...#/..#./...#/#..#"},
    { input: "###/###/#.#", output: "###./####/.###/###."},
    { input: "###/#.#/###", output: ".###/.#../..../##.#"},
    { input: "###/###/###", output: "#..#/.###/##../.##."}*/
]