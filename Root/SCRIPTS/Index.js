let url= "https://pokeapi.co/api/v2/pokemon";

const creatPoke = async ()  => {
    try {
        const res = await fetch(url);// nombre y URL de cada pokemon en la API
        const data = await res.json();

        data.results.forEach ( async (pokemon) => {

            const respons = await fetch(pokemon.url);// demas datos de la API
            const dataPokemon = await respons.json();

            const container = document.querySelector('.container');

            let pokeCard = document.createElement ('div');
            pokeCard.className = 'pokeCard'
            pokeCard.innerHTML= `
            <div class= "headerCard">
                <p>${dataPokemon.name}</p>
                <i>
            </div>
            
            <img class="imgPoke" src="${dataPokemon.sprites.other["home"].front_default}">

            <div>
                <p> ${dataPokemon.base_experience}</p>
                <button>Buy</button>
            </div>
            `
            container.appendChild(pokeCard);
            

        });
        
    }catch (error){
        alert ("error");
    }
}

creatPoke();