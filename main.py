from chessSounds import make

soundStr = "white_has_pawns_on f2 s g3 s and h2 s s white queen d1 s white rook f1 s white king g1 s s black queen b7 s black king e8 s black knight g5 s s black_to_move mate_in_one"

make(soundStr.split(" "))