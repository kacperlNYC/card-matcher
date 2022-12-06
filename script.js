// Kacper Letowski Odd Period 7, 8

function init() {
    score = 0;

    cards = []

    for (i = 0; i < 8; i++)
    {
        cards[i] = {
            visible:false,
            imageName:i+ ".jpeg"
        }
        cards[8+i] = {
            visible:false,
            imageName:i+ ".jpeg"
        }
    }

    priorChoice = ""
}

function check(cardID) {
    image = cards[cardID];
    console.log(image)
    if (!image.visible) 
    {
        image.visible = true
    }
    display();
}

function display() 
{
    for (i = 0; i < 16; i++)
    {
        if (cards[i].visible)
        {
            document.getElementById(i).innerHTML == "<img src=images/" + cards[i].imageName + ">"
        }
    }
}

