import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addToFavorites} from '../store/action'

export default function CardDetail () {
  const dispatch = useDispatch()
  let favorite = useSelector(state => state.favoriteReducer.favorite)

  let {id} = useParams()
  let [pokemons, setPokemons] = useState([])
  let [isLoading, setIsLoading] = useState(false)
  let [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://api.pokemontcg.io/v2/cards/${id}`)
    .then(response => response.json())
      .then(data => {
         setPokemons(data.data)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
    }, [id])

    if(isLoading) {
      return <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_hluo7ags.json"  background="transparent"  speed="1"  style={{width: "500px", height: "500px", textAlign: 'center', marginLeft: '380px'}}  loop autoplay/>
    }
  
    if(error) {
      return <h1>{error.message}</h1>
    }

  const addFav = () => {
    if(favorite.length !== 0) {
      for(let i = 0; i < favorite.length; i++) {
            if (favorite[i].id === id) {
                break
            } else {
                return dispatch(addToFavorites({image: pokemons.images?.small, name: pokemons.name, id: pokemons.id}))
            }
        }
    } else {
        return dispatch(addToFavorites({image: pokemons.images?.small, name: pokemons.name, id: pokemons.id}))
    }
  }

    return (
        <>
        <div className="container">
        <h1 style={{textAlign: 'center', marginTop: '10px', marginBottom: '10px'}}><b>POKEMON DETAIL</b></h1>
        <div className="card" style={{"width": "18rem", textAlign: 'center', marginLeft: '410px'}}>
        <img src={pokemons.images?.small} className="card-img-top" alt={pokemons.name}/>
        <h4 className="card-title" style={{textAlign: 'center', marginTop: '10px', marginBottom: '10px'}}>Name: {pokemons.name}</h4>
        <h3 className="card-title" style={{textAlign: 'center', marginTop: '10px', marginBottom: '10px'}}>HP: {pokemons.hp}</h3>
        <h3 className="card-title" style={{textAlign: 'center', marginTop: '10px', marginBottom: '10px'}}>Artist: {pokemons.artist}</h3>
        <button onClick={addFav} className="btn btn-danger" style={{textAlign: 'center'}}>Add to Favorites</button>
        </div>
        </div>
        </>
    )
}