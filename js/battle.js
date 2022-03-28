// let value = Cookies.get("pichuChosen");
// console.log(value);
// let pokemon = JSON.parse(value);

let value2 = Cookies.get("mewChosen");
console.log(value2);
let pokemon2 = JSON.parse(value2);

// let value3 = Cookies.get("charmanderChosen");
// console.log(value3);
// let pokemon3 = JSON.parse(value3);




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


function enterMew(pokemon2) {
    let div2 = document.createElement('div');
    div2.style.border = "3px solid pink";
    div2.classList.add('grid');

    let mewImage = document.createElement('img');
    mewImage.setAttribute('src', pokemon2.imgLink);
    mewImage.style.width = "200px";
    div2.append(mewImage);

    let pokemonName2 = document.createElement('h1');
    pokemonName2.innerText = pokemon2.monName;
    div2.append(pokemonName2);
    
    let pokemonStat2 = document.createElement('p');
    pokemonStat2.innerText = pokemon2.healthPoints;
    div2.append(pokemonStat2);
    
    document.getElementById("battler").append(div2);
}

function enterCharmander(pokemon3){
    let newDiv = document.createElement('div');
    newDiv.style.borderBottom = "3px solid white";
    newDiv.classList.add('grid');
    let pokemonSlot = document.getElementById("battler");
    pokemonSlot.style.border = `3px solid white`;
    
    let monImage = document.createElement('img');
    monImage.setAttribute('src', pokemon3.imgLink);
    monImage.style.width = "200px";
    newDiv.append(monImage);
    
    let pokemonName = document.createElement('h1');
    pokemonName.innerText = pokemon3.monName;
    newDiv.append(pokemonName);

    let pokemonStat = document.createElement('p');
    pokemonStat.innerText = pokemon3.healthPoints;
    newDiv.append(pokemonStat);

    document.getElementById("battler").append(newDiv);
}


// for (var i=0; i<pokemon.length; i++){
//     enterPichu(pokemon[i]);
// }
// console.log(enterPichu(pokemon[i]));

// enterPichu(pokemon);

for (var i=0; i<pokemon2.length; i++){
    enterMew(pokemon2[i]);
}
console.log(enterMew(pokemon2[i]));

enterMew(pokemon2);

// for (var i=0; i<pokemon3.length; i++){
//     enterCharmander(pokemon3[i]);
// }
// console.log(enterCharmander(pokemon3[i]));

// enterCharmander(pokemon3);

