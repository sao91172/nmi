let candidateNames1 = ["Jeb Bush","Ben Carson","Lincoln Chafee","Chris Christie","Ted Cruz","Carly Fiorina","Jim Gilmore"];
let candidateNames2 = ["Lindsey Graham","Bobby Jindal","John Kasich","Lawrence Lessig","Martin O'Malley","George Pataki","Rand Paul"];
let candidateNames3 = ["Rick Perry","Marco Rubio","Bernie Sanders","Rick Santorum","Donald Trump","Scott Walker","Jim Webb"];

let candidatePix1 = ["bush.jpg","carson.jpg","chafee.jpg","christie.jpg","cruz.jpg","fiorina.jpg","gilmore.jpg"];
let candidatePix2 = ["graham.jpg","jindal.jpg","kasich.jpg","lessig.jpg","omalley.jpg","pataki.jpg","paul.jpg"];
let candidatePix3 = ["perry.jpg","rubio.jpg","sanders.jpg","santorum.jpg","trump.jpg","walker.jpg","webb.jpg"];



let output1 = document.querySelector('#Bush');
let output2 = document.querySelector('#Graham');
let output3 = document.querySelector('#Perry');

let next1 = document.querySelector('#next1');
let next2 = document.querySelector('#next2');
let next3 = document.querySelector('#next3');


let previous1 = document.querySelector('#previous1');
let previous2 = document.querySelector('#previous2');
let previous3 = document.querySelector('#previous3');


//output.innerHTML = candidateNames[candidateNames.length - 1];
let i = 0;
function canShow(plusMinus,arr1,arr2,output) {
    
    output.innerHTML ="<br>" + arr1[i] + "<br> <img src = pix/" + arr2[i] + "><br>";
    i += plusMinus;
    if (i == arr1.length) {
        i = 0;
    } else if (i < 0) {
        i = arr1.length - 1;
    } //if
}//canShow

next1.onclick = function() {
    canShow(1, candidateNames1, candidatePix1, output1);
} //onClick
previous1.onclick = function() {
    canShow(-1, candidateNames1, candidatePix1, output1);
} //onClick
next2.onclick = function() {
    canShow(1, candidateNames2, candidatePix2, output2);
    } //onClick
previous2.onclick = function() {
    canShow(-1, candidateNames2, candidatePix2, output2);
} //onClick
next3.onclick = function() {
    canShow(1, candidateNames3, candidatePix3, output3);
} //onClick

previous3.onclick = function() {
    canShow(-1, candidateNames3, candidatePix3, output3);
} //onClick


