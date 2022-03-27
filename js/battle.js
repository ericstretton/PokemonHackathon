function battlePokemon(selection) {
    let party = document.getElementById('party');
    let partySlot = document.createElement(`div`);
    let pokemonName = document.createElement(`h1`);
    let pokemonImg = document.createElement('img');
    pokemonImg.src="https://www.pngkit.com/png/full/65-654006_pichu-deviantart-pichu-pokemon.png"
    party.append(partySlot);
    party.style.cssText="width:25%;border:solid red 5px;margin:10px";
    partySlot.append(pokemonName);
    party.append(pokemonImg);
    pokemonName.innerText=selection;
}


// function battlePokemonImage(selection){
let cookieParty = JSON.parse(Cookies.get(`battleParty`));
console.log(cookieParty);


// let cookieImg = JSON.parse(Cookies.get(`mewImage`));
// console.log(cookieImg);
// }


// Display pokemon that was gathered from index.html
battlePokemon(cookieParty);
// battlePokemon(pokemonImg);

function Object(){
    let partySlot = document.getElementById('party').querySelector('div').createElement('h2');
    partySlot.append(healthPoints);
    
    let party = {
            newAttr: {
                name: 'Pichu',
                healthPoints:100,
                attackPoints:25,
                attackOptions: ['Tackle', 'Leer', 'Thundershock', 'Electrocute'],
            },
            newAttr: {
                name: 'Mew',
                healthPoints:100,
                attackPoints:30,
                attackOptions: ['Psychic', 'Confusion', 'Teleport', 'Copycat']
            } ,
            newAttr: {
                name: 'Charmander',
                healthPoints:100,
                attackPoints:35,
                attackOptions: ['Ember','Flamethrower','Blaze','Fire Spin']
            }
        }
        
        let outputstring = "";
for (const party of Object){
    outputstring += `${newAttr.name} ${newAttr.healthPoints} ${newAttr.attackPoints} ${newAttr.attackOptions}` ;
    party(Object);
}
console.log(party);
    }