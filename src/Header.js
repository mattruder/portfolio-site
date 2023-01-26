import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'

export default function Header({setPage}) {
    
    const styles = {
        cursor: "pointer"
    }

    return (
        <div className="header">
<Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={styles} onClick={() => {setPage('home')}}>Matt Ruder</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={styles} onClick={() => {setPage('contact')}}>
            Contact
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
           
        
        
            
            
        </div>
       
        
    )
}