function numberToFile(number) {
    const IS_FLIPPED = document.location.search.split("=")[1] == "black";
    if (IS_FLIPPED) {
        return "hgfedcba"[number];
    } else {
        return "abcdefgh"[number];
    }
}

function invertRankMaybe(rank) {
    const IS_FLIPPED = document.location.search.split("=")[1] == "black";
    if (IS_FLIPPED) {
        return rank;
    } else {
        return 7 - rank;
    }
}

function getAllPieces() {
    let ps = document.querySelectorAll("cg-board>piece");
    let pieces = [];

    const widthStr = document.querySelector("cg-container").style.width;
    const CELL_SIZE = parseInt(widthStr.substr(0, widthStr.length - 2), 10) / 8;

    for(let p of ps) {
        let cn = p.className;
        let [_, coords] = p.style.transform.split("(");
    
        let [x, y] = coords.split(", ");
        x = parseInt(x.substr(0, x.length - 2), 10);
        y = parseInt(y.substr(0, y.length - 3), 10);
        
        x = Math.floor(x / CELL_SIZE);
        y = Math.floor(y / CELL_SIZE);

        pieces.push({
            type: cn,
            file: numberToFile(x),
            rank: invertRankMaybe(y) + 1
        });
    }
    return pieces;
}

function getPawns(pieces, whitePawns) {
    let pieceColor = (whitePawns) ? "white" : "black";
    return pieces
        .filter(p => p.type == `${pieceColor} pawn`)
        .sort((a, b) => a.file.charCodeAt(0) - b.file.charCodeAt(0));
}

function getPieces(pieces, whitePieces) {
    let pieceColor = (whitePieces) ? "white" : "black";
    let c1 = (p, pc) => p.type.indexOf(pc) !== -1;
    let c2 = p => p.type.indexOf("pawn") === -1;
    return pieces
        .filter(p => c1(p, pieceColor) && c2(p))
        .sort((a, b) => a.file.charCodeAt(0) - b.file.charCodeAt(0));;
}

function sq(p) {
    return `${p.file}${p.rank}`;
}

let pieces = getAllPieces();

let whitePawns = getPawns(pieces, true);

let blackPawns = getPawns(pieces, false);

let whitePieces = getPieces(pieces, true);
let blackPieces = getPieces(pieces, false);

const WHITE_TO_PLAY = document.querySelectorAll("div[class='color']>select>option")[0].selected;

let soundList = [];

if (whitePawns.length > 0) {
    soundList.push("white_has_pawns_on");
    
    for (let pi in whitePawns) {
        let p = whitePawns[pi];

        if (pi != 0 && pi == whitePawns.length - 1) {
            soundList.push("and");
        }

        soundList.push(`${sq(p)} s`);
    }

    soundList.push("s");
}

for (let p of whitePieces) {
    soundList.push(`${p.type} ${sq(p)} s`);
}

soundList.push("s");

if (blackPawns.length > 0) {
    soundList.push("black_has_pawns_on");
    
    for (let pi in blackPawns) {
        let p = blackPawns[pi];

        if (pi != 0 && pi == blackPawns.length - 1) {
            soundList.push("and");
        }

        soundList.push(`${sq(p)} s`);
    }

    soundList.push("s");
}

for (let p of blackPieces) {
    soundList.push(`${p.type} ${sq(p)} s`);
}

soundList.push("s");

let pieceColor = (WHITE_TO_PLAY) ? "white" : "black";
soundList.push(`${pieceColor}_to_move mate_in_one`);

console.log(soundList.join(" "));

// example: 
// white_has_pawns_on g3 s f2 s and h2 s s white queen d1 s white rook f1 s white king g1 s s black king e8 s black queen b7 s black knight g5 s s black_to_play mate_in_one