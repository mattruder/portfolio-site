import {Link} from 'react-router-dom'

export default function Header({setPage}) {
    return (
        <div className="header">
            <Link to="/">
                <button onClick={() => {setPage('home')}}>
                    <h1>Matt Ruder</h1>
                </button>
            </Link>
            <Link to="/contact">
                <button onClick={() => {setPage('contact')}}>
                    <h3>Contact</h3>
                </button>
            </Link>
        </div>
       
        
    )
}