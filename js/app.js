function appear(element){
    let buttons = element.querySelectorAll('button');
    for (var i=0; i<buttons.length; i++){
        buttons[i].classList.toggle('revealButton')
    }
}

function pickPichu(element){
    let parent = element.parentElement;
    let imgSrc = parent.querySelector("img").getAttribute("src");
    let pokemon = parent.querySelector("h1").innerText;
    let monHealth = parent.querySelector("p").innerText;
    let info = {
        imgLink: imgSrc,
        monName: pokemon,
        healthPoints: monHealth
    }
    pichuInfo.push(info)
    console.log(info);
    pichuReadyForBattle();
}
function pichuReadyForBattle(){
    Cookies.set("pokemonSelection", JSON.stringify(pichuInfo))
}




function pickMew(element) {
    let parent = element.parentElement;
    let imgSrc = parent.querySelector('img').getAttribute('src');
    let pokemon = parent.querySelector('h1').innerText;
    let monHealth = parent.querySelector('p').innerText;
    let info = {
        imgLink : imgSrc,
        monName : pokemon,
        healthPoints : monHealth
    }
    mewInfo.push(info);
    console.log(info);
    mewReadyForBattle();
}
function mewReadyForBattle() {
    Cookies.set("pokemonSelection", JSON.stringify(mewInfo));
}

function pickCharmander(element){
    let parent = element.parentElement;
    let imgSrc = parent.querySelector("img").getAttribute("src");
    let pokemon = parent.querySelector("h1").innerText;
    let monHealth = parent.querySelector("p").innerText;
    let info = {
        imgLink: imgSrc,
        monName: pokemon,
        healthPoints: monHealth
    }
    charmanderInfo.push(info)
    console.log(info);
    charmanderReadyForBattle();
}
function charmanderReadyForBattle(){
    Cookies.set("pokemonSelection", JSON.stringify(charmanderInfo))
}

var mewInfo = [];


var pichuInfo = [];

var charmanderInfo = [];












