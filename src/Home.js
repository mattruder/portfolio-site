import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MusicCard from './MusicCard.js'
import DevCard from './DevCard.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'


export default function Home({setPage}) {

    const styles={
      
      
    }

    

    return (
        <div style={styles} >
        
        <div style={styles} className="cards d-flex justify-content-center align-items-center">
        <Container >
      <Row className="d-flex justify-content-center align-items-center">
        <Col className="d-flex justify-content-center align-items-center" >{<MusicCard setPage={setPage}/>}</Col>
        <Col className="d-flex justify-content-center align-items-center">{<DevCard setPage={setPage}/>}</Col>
      </Row>

    </Container>
        
        
        </div>
    
        </div>
    )
}