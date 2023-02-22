let buildList = document.querySelector('#userInput');
    for (var i = 0; i < 100; i++) {
        buildList.innerHTML += "<option value=" + i + ">" + i + "</option>";
    }

function compare() {
    let answer = document.querySelector('#userInput');
    answer = answer.value;
    answer = Number(answer);
    let reaction = document.querySelector('#response');

    /*
    if (answer == 24) {
        reaction.innerHTML = "correct";
    } 
    if (answer < 24) {
        reaction.innerHTML = answer + " is too low.";
    }
    if (answer > 24) {
        reaction.innerHTML = answer + " is too high.";
    }
    if (answer > 24 && answer < 28) {
        reaction.innerHTML = "That number is high but pretty close.";
    }
    if (answer < 24 && answer > 20) {
        reaction.innerHTML = "That number is low but pretty close.";
    }
    */

    switch(true) {
        case (answer == 24):
            reaction.innerHTML = "correct";
            break;
        case (answer < 24):
            reaction.innerHTML = "too low";
            break;
        case (answer > 24):
            reaction.innerHTML = "too high";
            break;
    }
}//compare
