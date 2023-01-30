import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react'
import Home from './Home.js'
import MusicPage from './MusicPage.js'
import DevPage from './DevPage.js'
import Header from './Header.js'
import ContactForm from './ContactForm.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [page, setPage] = useState('home')

  if (page) {
    window.scrollTo(0, 0)
  }

  const contentStyles = {
    height: "90vh",
    
  }

  const navStyles= {
    height: "10vh"
  }

  return (
    <div className="app">
      <div style={navStyles} className="header">
        {<Header setPage={setPage} />}
      </div>
      <div style={contentStyles} className='content'>
        {page === 'home' && <Home setPage={setPage}/>}
        {page === 'music' && <MusicPage />}
        {page === 'dev' && <DevPage />}
        {page === 'contact' && <ContactForm />}
      </div>
    </div>
  );
}

export default App;
