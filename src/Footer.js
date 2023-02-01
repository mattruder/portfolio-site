import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'

import './ExtraStyles.css'

export default function Footer() {
    

    const sticky={
      position: "absolute",
      bottom: "0",
      width: "100%",
      zIndex: "0",
      
 
    }

    return (
        <div>
<Navbar style={sticky} bg="dark" variant="dark">
      <Container>
        
        <Navbar.Collapse className="justify-content-center align-items-center">
        <Navbar.Text className="footerText">
            © Matt Ruder 2023
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
           
        
        
            
            
        </div>
       
        
    )
}