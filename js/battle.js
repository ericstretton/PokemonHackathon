// Get Cookie from app.js, Parse the string back into an object

let value = Cookies.get("pokemonSelection");
console.log(value);
let pokemon = JSON.parse(value);

// Function RemoveCookie is meant to remove the cookie when returning to Home Page.
function removeCookie(){
    Cookies.remove(`pokemonSelection`);
    window.location.href="/index.html";
}

// Function to place information for Pichu battling.

function enterPichu(pokemon){
    let newDiv = document.createElement('div');
    newDiv.style.borderBottom = "3px solid white";
    newDiv.classList.add('grid');
    let pokemonSlot = document.getElementById("battler");
    pokemonSlot.style.border = `3px solid white`;
    
    let monImage = document.createElement('img');
    monImage.setAttribute('src', pokemon.imgLink);
    monImage.style.width = "200px";
    newDiv.append(monImage);
    
    let pokemonName = document.createElement('h1');
    pokemonName.innerText = pokemon.monName;
    newDiv.append(pokemonName);

    let pokemonStat = document.createElement('p');
    pokemonStat.innerText = pokemon.healthPoints;
    newDiv.append(pokemonStat);

    document.getElementById("battler").append(newDiv);
}

// Function to place information for Mew battling.

function enterMew(pokemon) {
    let div2 = document.createElement('div');
    div2.style.border = "3px solid pink";
    div2.classList.add('grid');

    let mewImage = document.createElement('img');
    mewImage.setAttribute('src', pokemon.imgLink);
    mewImage.style.width = "200px";
    div2.append(mewImage);

    let pokemonName2 = document.createElement('h1');
    pokemonName2.innerText = pokemon.monName;
    div2.append(pokemonName2);
    
    let pokemonStat2 = document.createElement('p');
    pokemonStat2.innerText = pokemon.healthPoints;
    div2.append(pokemonStat2);
    
    document.getElementById("battler").append(div2);
}

// Function to place information for Charmander battling.

function enterCharmander(pokemon){
    let newDiv = document.createElement('div');
    newDiv.style.borderBottom = "3px solid white";
    newDiv.classList.add('grid');
    let pokemonSlot = document.getElementById("battler");
    pokemonSlot.style.border = `3px solid white`;
    
    let monImage = document.createElement('img');
    monImage.setAttribute('src', pokemon.imgLink);
    monImage.style.width = "200px";
    newDiv.append(monImage);
    
    let pokemonName = document.createElement('h1');
    pokemonName.innerText = pokemon.monName;
    newDiv.append(pokemonName);

    let pokemonStat = document.createElement('p');
    pokemonStat.innerText = pokemon.healthPoints;
    newDiv.append(pokemonStat);

    document.getElementById("battler").append(newDiv);
}

// Loop to call function enterPichu to page

for (var i=0; i<pokemon.length; i++){
    enterPichu(pokemon[i]);
}
console.log(enterPichu(pokemon[i]));
enterPichu(pokemon);

// Loop to call function enterMew to page

for (var i=0; i<pokemon.length; i++){
    enterMew(pokemon[i]);
}
console.log(enterMew(pokemon[i]));
enterMew(pokemon);

// Loop to call function enterCharmander to page
for (var i=0; i<pokemon.length; i++){
    enterCharmander(pokemon[i]);
}
console.log(enterCharmander(pokemon[i]));
enterCharmander(pokemon);

