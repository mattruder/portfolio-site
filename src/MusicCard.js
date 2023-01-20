import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

export default function MusicCard({setPage}) {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
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
    )
}