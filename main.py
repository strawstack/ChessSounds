from chessSounds import make

def build(bodyStr, answer):
    intro = "intro"
    hear_answer = "hear_answer_in_five 5s"
    outro = "outro"

    finalString = f"{intro} s s {bodyStr} {hear_answer} {answer} 3s {outro}"

    make(finalString.split(" "))

# ep2
# FEN = "3k4/1q6/8/6n1/8/6P1/5P1P/3Q1RK1 b - - 0 1"
# bodyStr = "white_has_pawns_on f2 s g3 s and h2 s s white queen d1 s white rook f1 s white king g1 s s black queen b7 s black king d8 s black knight g5 s s black_to_move mate_in_one"
# answer = "black knight on g5 hs to hs h3"

# ep3
# FEN = "7R/8/8/6p1/4K1k1/6p1/5P2/8 w - - 0 1"
# bodyStr = "white_has_pawns_on f2 s s white king e4 s white rook h8 s s black_has_pawns_on g5 s and g3 s s black king g4 s s white_to_move mate_in_one"
# answer = "white pawn on f2 hs to hs f3"

# ep4
# FEN = "4r1k1/1R6/6Np/8/5P2/8/1B6/7K w - - 0 1"
# bodyStr = "white_has_pawns_on f4 s s white rook b7 s white bishop b2 s white knight g6 s white king h1 s s black_has_pawns_on h6 s s black rook e8 s black king g8 s s white_to_move mate_in_one"
# answer = "white rook on b7 to g7" 

# ep5
# FEN = "6k1/5p2/8/7N/5P2/7P/8/1BR2K2 w - - 0 1"
# bodyStr = "white_has_pawns_on f4 s and h3 s s white bishop b1 s white rook c1 s white king f1 s white knight h5 s s black_has_pawns_on f7 s s black king g8 s s white_to_move mate_in_one"
# answer = "white rook on c1 to c8"

# epN
FEN = ""
bodyStr = ""
answer = ""

# epN
# FEN = ""
# bodyStr = ""
# answer = ""

build(
    bodyStr, 
    answer)