import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MusicCard from './MusicCard.js'
import DevCard from './DevCard.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'


export default function Home({setPage}) {

    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div className="home">
        
        <div className="cards">
        <Container >
      <Row >
        <Col style={styles}>{<MusicCard setPage={setPage}/>}</Col>
        <Col style={styles}>{<DevCard setPage={setPage}/>}</Col>
      </Row>

    </Container>
        
        
        </div>
    
        </div>
    )
}