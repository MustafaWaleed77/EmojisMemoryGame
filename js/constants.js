export const EMOJIS_PATH = "./svg";
export const EMOJIS = [
    'angry', 'bored',
    'confused', 'crying',
    'embarrassed', 'emoticons',
    'happy', 'ill',
    'in-love', 'kissing',
    'mad', 'nerd',
    'ninja', 'quiet',
    'sad', 'secret',
    'smart', 'smile',
    'smiling', 'surprised',
    'suspicious', 'tongue-out',
    'unhappy', 'wink'
];
export const LEVELS = [
    {rows: 2, columns: 3, toSolve: 3, level: 1},
    {rows: 2, columns: 4, toSolve: 4, level: 2},
    {rows: 3, columns: 4, toSolve: 6, level: 3},
    {rows: 4, columns: 4, toSolve: 8, level: 4},
    {rows: 4, columns: 5, toSolve: 10, level: 5},
    {rows: 6, columns: 6, toSolve: 18, level: 6},
];

export const GRID_HEIGHT = 500;
export const GRID_WIDTH = 1100;

export const RE_FLIP_TIME = 1000; //1 sec

export const SCORE_ID = "score";
export const LAST_LEVEL = LEVELS.length;
