import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'

import './ExtraStyles.css'

export default function Header({setPage}) {
    
    const styles = {
        cursor: "pointer",
        a: {
          textDecoration: "none"
        },
        ahover: {
          cursor: "pointer"
        }
    }

    const sticky={
      position: 'fixed',
      top: "0",
      width: "100%",
      zIndex: "100",
      paddingBottom: "5px",
      padding: "10px"
    }

    return (
        <div className="header">
<Navbar style={sticky} bg="dark" variant="dark">
      <Container>
        <Link  to="/" className="text-decoration-none cursor-pointer">
        <Navbar.Brand className="cursor-pointer"  onClick={() => {setPage('home')}}>Matt Ruder</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/contact" className="text-decoration-none">
          <Navbar.Text style={styles} onClick={() => {setPage('contact')}}>
            Contact
          </Navbar.Text>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
           
        
        
            
            
        </div>
       
        
    )
}