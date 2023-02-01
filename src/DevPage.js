import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import './ExtraStyles.css'

export default function DevPage() {

    const devStyles = {
        padding: '10px'
    }

    return (
        <div style={devStyles} className="developer-page d-flex flex-column align-items-center cardPaddingBtm cardPaddingTop"> 
            <h1 className="transparentBG lilborder">Developer Services</h1>
            <div style={devStyles} className="languages d-flex flex-wrap justify-content-center align-items-center">
                
                <div  style={devStyles} className="music-services-container d-flex flex-wrap justify-content-center align-items-center">
               
        <ListGroup fluid horizontal className="d-flex flex-wrap ">
        
                <ListGroup.Item className="transparentBG">React.js</ListGroup.Item>
                <ListGroup.Item className="transparentBG">JavaScript</ListGroup.Item>
                <ListGroup.Item className="transparentBG">TypeScript</ListGroup.Item>
                <ListGroup.Item className="transparentBG" >HTML5</ListGroup.Item>
                <ListGroup.Item className="transparentBG">CSS3</ListGroup.Item>
                <ListGroup.Item className="transparentBG">Markdown</ListGroup.Item>
                <ListGroup.Item className="transparentBG">Unit Testing</ListGroup.Item>
                <ListGroup.Item className="transparentBG">Cypress</ListGroup.Item>
                <ListGroup.Item className="transparentBG">Apollo GraphQL</ListGroup.Item>
                <ListGroup.Item className="transparentBG">TDD</ListGroup.Item>
                <ListGroup.Item className="transparentBG">Git/Github</ListGroup.Item>
                <ListGroup.Item className="transparentBG">NPM</ListGroup.Item>
                
                </ListGroup>
     
                
            </div>
              
            </div>
            <div style={devStyles} className="services-container d-flex flex-column align-items-center justify-content-around">
            <div className="summary transparentBG lightpadding lilborder">
                <p>I am a software engineer and recent graduate of the Frontend Engineering Program at Turing School of Software and Design. 
                    I have a diverse portfolio of projects, and am looking to expand my horizons as a developer as well as my tech stack. 
                    I am energized by learning something new every day as well as growth opportunities where I feel supported and encouraged to go beyond my current capabilities.</p>
            </div>
            </div>
            <div style={devStyles} className="portfolio transparentBG">
                <h3><a href="https://terminal.turing.edu/profiles/1427" target="_blank">View My Portfolio</a></h3>
            </div>
            
        </div>
       
    )
}