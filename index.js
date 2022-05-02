const getPokemon = async () => {
  const req = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const res = await req.json();
  const data = res.results;
  const ul = document.getElementById("pokemons");
  for (let i = 0; i < data.length; i++) {
    ul.innerHTML += `<li>${data[i].name} \t\t\t\t\t ${data[i].url}</li>`;
  }
  console.log(data);
};

getPokemon();
