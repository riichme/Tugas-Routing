import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import '../App.css'
import Search from '../components/search'
import useFetch from '../hooks/useFetch'
import {fetchPokemon} from '../store/action'
import Card from '../components/cardPokemon'

function Home() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.fetchData.dataPokemon)
    const [isLoading, error] = useFetch()

    useEffect(() => {
      dispatch(fetchPokemon())
    }, [])

  if(isLoading) {
    return <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_hluo7ags.json"  background="transparent"  speed="1"  style={{width: "500px", height: "500px", textAlign: 'center', marginLeft: '380px'}}  loop autoplay/>
  }

  if(error) {
    return <h1>{error.message}</h1>
  }

  return (
      <>
      <div className="container">
        <Search></Search>
        <div className="row">
            {
            data?.map((pokemon) => {
            return <Card name={pokemon.name} img={pokemon.images.small} id={pokemon.id}></Card>
            })
            }
        </div>
      </div>
      </>
    );
}


export default Home;
