const a = document.getElementById("btn-1");
const b = document.getElementById("btn-2");
const c = document.getElementById("btn-3");
const d = document.getElementById("btn-4");
const e = document.getElementById("btn-5");
const f = document.getElementById("btn-6");
const g = document.getElementById("btn-7");
const h = document.getElementById("btn-8");

//B-C-F-E   B-C-E-D
//F4- F4'-B4- A4'
a.addEventListener("click",()=>{makeSound("a")})

function makeSound(key) {
    var audio = new Audio("sounds/"+key+".mp3");
        audio.play();
  }