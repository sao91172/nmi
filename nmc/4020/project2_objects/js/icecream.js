let icecreamObject = {"Mint Ice Cream": "minticecream",
"Cookies & Cream Ice Cream": "ccc",
"Chocolate Chip Cookie Dough Ice Cream": "cccd",
"Vanilla Ice Cream": "vanilla",
"Strawberry Ice Cream": "strawberry",
}

let icecreamArray =["Mint Ice Cream","Cookies & Cream Ice Cream","Chocolate Chip Cookie Dough Ice Cream","Vanilla Ice Cream","Strawberry Ice Cream"];
 
let buttons = document.querySelector("#icecream");
for (let i = 0; i < icecreamArray.length; i++) {
  buttons.innerHTML += "<li><button onclick=quote('" + icecreamObject[icecreamArray[i]] +"') >" + icecreamArray[i] +"</button></li>";
} //for

function quote(jpgName){   
  let keyword = "Mint Ice Cream";

    if (icecreamObject.hasOwnProperty(keyword)) {
      document.querySelector("#image").innerHTML = "<img src= icecreampix/" + jpgName + ".jpeg>";
    } else {
      document.querySelector("#about").innerHTML = "No information available about " + keyword;
    } //if
  } //quote
