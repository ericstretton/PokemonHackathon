function pickPokemon(mon){
    let pokemonParty = mon.innerText;
    
    // let pokemonParty = {};
    // Object.assign(pokemonParty);
    Cookies.set(`battleParty`, JSON.stringify(pokemonParty));
    
    window.location.href='/pages/battle.html';
}

// function getPokemonImage(mewImage){
//     document.getElementById("pichu").src =
//     pokemonImage= mewImage.src = "https://www.pngfind.com/pngs/m/684-6847916_pokemon-mew-png-transparent-png.png";
//     Cookies.set(`mewImage`, JSON.stringify(pokemonImage));
// }


// function pickOpponent(monOpponent){
//     let pokemonName = monOpponent.innerText;
//     pokemonParty.push(pokemonName);
//     Cookies.set(`battleParty`, JSON.stringify(party));
//     console.log(party);
//     window.location.href='/pages/battle.html';
// }

// function pokemonImg() {
//     Cookies.set('pokemonHealth', JSON.stringify(pokeImg));
//     let pokeImg = document.createElement('img');
//     let cookieParsed = JSON.parse(Cookies.get(`pokemonHealth`));
//     console.log(cookieParsed);
// }


// let party = {
//     pokemonName: "pichu",
//     pokemonName: "mew", 
//     pokemonName: "charmander",
    
// }



function pokemonStats(){
    let party = {
            newAttr: {
                name: 'Pichu',
                healthPoints:100,
                attackPoints:25,
                attackOptions: ['Tackle', 'Leer', 'Thundershock', 'Electrocute'],
            },
            
            // newAttr: {
            //     name: 'Mew',
            //     healthPoints:100,
            //     attackPoints:30,
            //     attackOptions: ['Psychic', 'Confusion', 'Teleport', 'Copycat']
            // } ,
            // newAttr: {
            //     name: 'Charmander',
            //     healthPoints:100,
            //     attackPoints:35,
            //     attackOptions: ['Ember','Flamethrower','Blaze','Fire Spin']
            // }
        }
        Cookies.set(`healthsPoints`, JSON.stringify(healthPoints)),
        console.log(healthPoints),
        // let outputstring = "";
// for (const party of pokemonStats){
//     outputstring += `${newAttr.name} ${newAttr.healthPoints} ${newAttr.attackPoints} ${newAttr.attackOptions}` ;
//     party(Object);

console.log(party);
    }


// var imageSource = document.querySelector('img').getAttribute('src');



// let pokemonParty = {};
// const pokemonPartyToAdd1 = {
//     pokemonName: "Pichu", 
//     IMG: imageSource,
//     imageSource: "https://www.pngkit.com/png/full/65-654006_pichu-deviantart-pichu-pokemon.png",
//     healthPoints: 100, 
//     attackPoints: 25, 
//     attackOptions: ['Tackle', 'Leer', 'Thundershock', 'Electrocute'],
// }
// const pokemonPartyToAdd2 =  {
//     name: "Mew",
//     healthPoints:100,
//     attackPoints:30,
//     attackOptions: ['Psychic', 'Confusion', 'Teleport', 'Copycat']
// }
// const pokemonPartyToAdd3 = {
//     name: "Charmander",
//     healthPoints:100,
//     attackPoints:35,
//     attackOptions: ['Ember','Flamethrower','Blaze','Fire Spin']
// }

// console.log(pokemonParty ,{pokemonPartyToAdd1});
// pokemonParty{0}= {
    
//     pokemonname; 'Pichu',
//     healthPoints; 100,
//     attackPoints; 25,
//     attackOptions; ['Tackle', 'Leer', 'Thundershock', 'Electrocute'],
    

// }
// let party = {
//     pichuAttr: {
//     name: 'Pichu',
//     healthPoints:100,
//     attackPoints:25,
//     attackOptions: ['Tackle', 'Leer', 'Thundershock', 'Electrocute'],
//     },
//     mewAttr: {
//         name: 'Mew',
//         healthPoints:100,
//         attackPoints:30,
//         attackOptions: ['Psychic', 'Confusion', 'Teleport', 'Copycat']
//     },
//     charmanderAttr: {
//         name: 'Charmander',
//         healthPoints:100,
//         attackPoints:35,
//         attackOptions: ['Ember','Flamethrower','Blaze','Fire Spin']
//     }
// }


// function checkParty(pokemonAttr) {
//     return pokemonAttr.name.healthPoints.
// }

// function attackFunction = 
