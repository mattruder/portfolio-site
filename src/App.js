import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Home from './Home.js'

function App() {

  const [page, setPage] = useState('home')


  return (
    <div className="app">
    {page === 'home' && <Home setPage={setPage}/>}
    </div>
  );
}

export default App;
