// f7ae0407
import './App.css';
import { useEffect } from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=f7ae0407'

function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <h1>This is the movie posters app</h1>
  );
}

export default App;
