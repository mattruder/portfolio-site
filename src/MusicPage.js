import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

export default function MusicPage() {

    const styles = {
        padding: '5px'
    }

    const rowStylesTop = {
        paddingLeft: '5px',
        paddingRight: '5px',
        paddingTop: '5px'
        
    }

    const rowStylesLast = {
        paddingLeft: '5px',
        paddingRight: '5px',
        paddingBottom: '5px'
    }

    return (
        <div className="music-page ">
            <div className="d-flex justify-content-center align-items-center">
            <h1>Music</h1>
            </div>
            <div style={styles} className="music-services-container d-flex justify-content-center align-items-center">
                <ListGroup horizontal>
                <ListGroup.Item>Film Scores</ListGroup.Item>
                <ListGroup.Item>Live Performances</ListGroup.Item>
                <ListGroup.Item>Tours</ListGroup.Item>
                <ListGroup.Item>Jingles</ListGroup.Item>
                <ListGroup.Item>Session Recording</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="music-videos-container">
                <Container  fluid>
                    <Row  style={rowStylesTop} className="grid">
                        <Col style={styles} className="d-flex justify-content-center align-items-center">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/0pRJI1di-uQ" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen>
                            </iframe>
                        </Col>
                        <Col style={styles} className="d-flex justify-content-center align-items-center">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/EaQJX3xL01g" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen>
                            </iframe>
                        </Col>
                        </Row>
                        <Row style={rowStylesLast}>
                        <Col style={styles} className="d-flex justify-content-center align-items-center">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/pDmcf0Xu6Cs" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen>
                            </iframe>
                        </Col>
                        <Col style={styles} className="d-flex justify-content-center align-items-center">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/M_2qSnxm9RI" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>
                            </iframe>
                        </Col>
                    </Row> 
                </Container>
            </div>
            <div className="music-page-spotify">
                <iframe 
                    src="https://open.spotify.com/embed/playlist/5lwyFw7PRQKYmYgKRwQiV7?utm_source=generator&theme=0" 
                    width="100%" 
                    height="380" 
                    allowFullScreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
            </div>
            
        </div>
    )
}