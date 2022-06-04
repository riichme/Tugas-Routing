import {useState, useEffect} from 'react'

export default function useFetch() {
    let [isLoading, setIsLoading] = useState(false)
    let [error, setError] = useState(false)
  
    useEffect(() => {
      // dispatch(fetchPokemon())
      fetch('https://api.pokemontcg.io/v2/cards')
      .then(response => response.json())
      .then(data => {
        setIsLoading(true)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
    }, [])

    return [isLoading, error]
}