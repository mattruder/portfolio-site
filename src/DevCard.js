import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import Image from "react-bootstrap/Image";

export default function DevCard({setPage}) {
    return (
        <Card style={{ width: '18rem' }}>
      <Image variant="top" fluid src={require("./images/dev-pic.png")} />
      <Card.Body>
        <Card.Title>Development</Card.Title>
        <Card.Text>
          I am a recently graduated frontend developer looking to land a job! Hire me.
        </Card.Text>
        <Link to='/dev'>
            <Button variant="primary" onClick={() => setPage('dev')}>More Info</Button>
        </Link>
      </Card.Body>
    </Card>
    )
}