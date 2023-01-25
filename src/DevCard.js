import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

export default function DevCard({setPage}) {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Development</Card.Title>
        <Card.Text>
          I am a developer looking to land a job! 
        </Card.Text>
        <Link to='/dev'>
            <Button variant="primary" onClick={() => setPage('dev')}>More Info</Button>
        </Link>
      </Card.Body>
    </Card>
    )
}