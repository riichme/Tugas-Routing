import React, {useState} from 'react';
import '../App.css'
import Card from './cardPokemon'

function Search() {
    let [pokemons, setPokemons] = useState([])
    let [search, setSearch] = useState([])

  function handleChange(event) {
    event.preventDefault() 
    setSearch(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch('https://api.pokemontcg.io/v2/cards?q=name:'+search)
    .then(response => response.json())
    .then((data) => {
      setPokemons(data.data)
    })
  }

  return (
      <>
      <div className="container">
        <div className="row">
          <div className="mb-3">
            <form onSubmit={(event) => handleSubmit(event)} value={search} style={{textAlign: 'center'}}>
              <input placeholder="Search Pokemons..." onChange={(event) => handleChange(event)}/>
                <button type="submit">Search</button>
              </form>
          </div>
            {
            pokemons?.map((pokemon) => {
            return <Card name={pokemon.name} img={pokemon.images.small} id={pokemon.id}></Card>
            })
            }
        </div>
      </div>
      </>
    );
}


export default Search;
