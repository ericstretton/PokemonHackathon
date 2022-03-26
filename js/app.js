function pickPokemon(mon){
    console.log(mon);
    let pokemonName = mon.querySelector(`div`).innerText(`h1`);
    party.push(pokemonName);
    Cookies.set(`battleParty`, JSON.stringify(party));
    console.log(party);
    window.location.href='/battle.html';
}

let party = [];