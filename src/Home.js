import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MusicCard from './MusicCard.js'
import DevCard from './DevCard.js'


export default function Home({setPage}) {
    return (
        <div className="home">
        <h1>This is Home</h1>
        <div className="cards">
        {<MusicCard setPage={setPage}/>}
        {<DevCard setPage={setPage}/>}
        </div>
    
        </div>
    )
}