import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'



export default function MusicCard({setPage}) {

  const styles = {
    card: {
      backgroundColor: '#B7E0F2',
      borderRadius: 55,
      padding: '3rem'
    },
    cardImage: {
      objectFit: 'cover',
      borderRadius: 55
    }
  }

    return (
      <div>
       
        <Card style={{ width: '30rem' }}>
      <Image fluid variant="top" src={require("./images/music-pic.png")} />
      <Card.Body>
        <Card.Title>Music</Card.Title>
        <Card.Text>
          Book me for live performances, tours, film scores, jingles, recordings, and more.
        </Card.Text>
        <Link to='/music'>
            <Button variant="primary" onClick={() => setPage('music')}>More Info</Button>
        </Link>
        
      </Card.Body>
    </Card>
   
   
    </div>
    )
}