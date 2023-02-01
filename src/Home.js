import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MusicCard from './MusicCard.js'
import DevCard from './DevCard.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'


export default function Home({setPage}) {

    const styles={
      
      padding: '5px'
    }

    

    return (
        <div >
        
        <div  className="cards d-flex justify-content-center align-items-center cardPaddingBtm cardPaddingTop">
        <Container >
      <Row style={styles} className="d-flex flex-wrap justify-content-center align-items-center">
        <Col style={styles} className="d-flex justify-content-center align-items-center" >{<MusicCard setPage={setPage}/>}</Col>
        <Col style={styles} className="d-flex justify-content-center align-items-center">{<DevCard setPage={setPage}/>}</Col>
      </Row>

    </Container>
        
        
        </div>
    
        </div>
    )
}