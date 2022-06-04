import React from 'react';
import {useSelector} from 'react-redux'
import '../App.css'
import Card from '../components/cardPokemon'

function Favorite() {
    let favorite = useSelector(state => state.favoriteReducer.favorite)

  return (
      <>
      <div className="container">
        <div className="row">
        <div className="card" style={{"width": "18rem"}}>
            {
            favorite?.map((pokemon) => {
            return <Card img={pokemon.image} name={pokemon.name} id={pokemon.id}></Card>
            })
            }
            </div>
        </div>
      </div>
      </>
    );
}


export default Favorite;
