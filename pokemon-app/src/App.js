import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getAllPokemon } from './utils/pokemon';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon"

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンのデータを取得
      let res = await getAllPokemon(initialURL);
      console.log(res);
    }
    fetchPokemonData();
  }, []);
  return (
    <div className="App"></div>
  );
}

export default App;
