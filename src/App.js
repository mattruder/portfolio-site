import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react'
import Home from './Home.js'
import MusicPage from './MusicPage.js'
import DevPage from './DevPage.js'
import Header from './Header.js'
import ContactForm from './ContactForm.js'
import Footer from './Footer.js'
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
    backgroundSize: '100%',
    
    
  }

  const [page, setPage] = useState('home')


  if (page) {
    window.scrollTo(0, 0)
  }

  const contentStyles = {
   
    
    
  }

  const navStyles= {
    height: "10vh"
  }

  const extraSpace = {
    
  
  }

  return (
    <div className="appy scroll transparentBG page-container" style={appStyles}>
      <div style={navStyles} className="header">
        {<Header setPage={setPage} />}
      </div>
      <div style={contentStyles} className='content align-items-center justify-content-center content-wrap'>
        {page === 'home' && <Home setPage={setPage}/>}
        {page === 'music' && <MusicPage />}
        {page === 'dev' && <DevPage />}
        {page === 'contact' && <ContactForm setPage={setPage}/>}
      </div>
     <div className="footer" style={extraSpace}>{<Footer />}</div>
    </div>
  );
}

export default App;
