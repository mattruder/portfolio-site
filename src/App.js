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
import background from "./images/trees-background.png"
import './ExtraStyles.css'

function App() {

  const appStyles = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed',
   
    
  }

  const [page, setPage] = useState('home')


  if (page) {
    window.scrollTo(0, 0)
  }

  const contentStyles = {
    height: "80vh"
    
  }

  const navStyles= {
    height: "10vh"
  }

  const extraSpace = {
    bottom: '20px',
    position: 'fixed'
  }

  return (
    <div className="appy scroll transparentBG removeExtraSpaceAtBottom" style={appStyles}>
      <div style={navStyles} className="header">
        {<Header setPage={setPage} />}
      </div>
      <div style={contentStyles} className='content align-items-center justify-content-center removeExtraSpaceAtBottom'>
        {page === 'home' && <Home setPage={setPage}/>}
        {page === 'music' && <MusicPage />}
        {page === 'dev' && <DevPage />}
        {page === 'contact' && <ContactForm setPage={setPage}/>}
      </div>
      <div style={extraSpace}></div>
    </div>
  );
}

export default App;
