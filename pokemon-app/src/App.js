import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from './utils/pokemon';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon"
  const [loading, setLoding] = useState(true);

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
    console.log(_pokemonData)
  }

  

  return (
    <div className="App">
      {loading ? (
        <h1>ロード中。。。</h1>
      ) : (
        <h1>ポケモンデータを取得</h1>
      )
      }
    </div>
  );
}

export default App;
