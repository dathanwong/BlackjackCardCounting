//Initialize the cards
var card1 = {
    "suit":0,
    "value":0
};
var card2 = {
    "suit":1,
    "value":0
};

var suits = [
    "spades",
    "clubs",
    "diamonds",
    "hearts"
];

count = 0;

//Convert array to card value
function arrayToCard(card){
    if(card["value"] === 0){
        return "cards/back.jpg"
    }else{
        output = "cards/" + suits[card["suit"]] + card["value"] + ".png";
        return output;
    }
}

//Update cards
function updateCards(c1, c2){
    $("#card1").attr("src", arrayToCard(c1));
    $("#card2").attr("src", arrayToCard(c2));
}

//Get random card
function randomCards(){
    card1["suit"] = Math.floor((Math.random()*4))
    card1["value"] = Math.floor((Math.random()*13)+1)
    card2["suit"] = Math.floor((Math.random()*4))
    card2["value"] = Math.floor((Math.random()*13)+1)
    updateCards(card1, card2);
    updateCount(card1);
    updateCount(card2);
}

//Update the card count
function updateCount(card){
    if(card["value"] > 9 || card["value"] === 1){
        count--;
    }else if(card["value"] > 1 && card["value"] < 7 ){
        count++;
    }
    console.log(count);
}

//Check count on click
$("#checkCount").click(function(){
    if($("#count").val() == count){
        console.log("Correct");
        randomCards();
    }else{
        console.log("Wrong");
    }
    return false;
});

//Main execution
randomCards();