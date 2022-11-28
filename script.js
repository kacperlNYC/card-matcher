// Kacper Letowski Odd Period 7, 8

function init() {
    score = 0;
    cards = [
        1, 1, 2, 2,
        3, 3, 4, 4,
        5, 5, 6, 6,
        7, 7, 8, 8
    ]
    priorChoice = ""
}

function showImage(cardID, image) {
    document.getElementById(cardID).innerHTML = "<img src=images/" + image + ".jpeg>"
}

function check(cardID) {
    image = cards[cardID];
    showImage(cardID, image);
}

