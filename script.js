// Kacper Letowski Odd Period 7, 8

function init() {
    score = 0;
    scoreOut = document.getElementById("score");
    priorChoice = -1;
    cards = [];

    reset();
}

function check(cardID) {
    if (document.getElementById(cardID).innerHTML.length == 0) // Image clicked is not already selected
    {
        if (priorChoice == -1) // first choice
        {
            priorChoice = cardID;
            showImage(cardID);
        }
        else // second choice
        {
            showImage(cardID);
            if (cards[priorChoice] != cards[cardID]) // images don't match
            {
                setTimeout(() => {
                    hideImage(priorChoice);
                    hideImage(cardID);
                    priorChoice = -1;
                }, 1000)
            }
            else // cards match
            {
                priorChoice = -1;
            }
        }
        score++;
    }
    display();
}

function showImage(cardID)
{
    let imageID = cards[cardID];
    document.getElementById(cardID).innerHTML = "<img src='images/" + imageID + ".jpeg'>";
    document.getElementById(cardID).style.transform = "rotateY(0deg)";
}

function hideImage(cardID)
{
    document.getElementById(cardID).style.transform = "rotateY(180deg)";
    document.getElementById(cardID).innerHTML = "";
}

function display()
{
    scoreOut.innerHTML = score;
}

function reset()
{
    score = 0;
    priorChoice = -1;
    cards = [];

    for (let i = 0; i < 8; i++)
    {
        cards[i] = i + 1;
        cards[i+8] = i + 1;
    }

    for (let i = 0; i < 16; i++)
    {
        document.getElementById(i).innerHTML = "";
        document.getElementById(i).style.transform = "rotateY(180deg)";

        let random = Math.trunc(Math.random() * 16);
        let swap = cards[random];
        cards[random] = cards[i];
        cards[i] = swap;
    }
}
