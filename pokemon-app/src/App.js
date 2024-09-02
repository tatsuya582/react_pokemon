import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from './utils/pokemon';
import Card from './components/Card/Card';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon"
  const [loading, setLoding] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンのデータを取得
      let res = await getAllPokemon(initialURL);
      loadPokemon(res.results);
      setLoding(false);
    }
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData)
  }

  

  return (
    <div className="App">
      {loading ? (
        <h1>ロード中。。。</h1>
      ) : (
        <div className='pokemonCardContainer'>
          {pokemonData.map((pokemon, i) => {
            return <Card key={i} pokemon={pokemon} />;
          })}
        </div>
      )
      }
    </div>
  );
}

export default App;
