import {Link} from 'react-router-dom'

export default function Header({setPage}) {
    return (
        <Link to="/">
            <button onClick={() => {setPage('home')}}>
                <h1>Matt Ruder</h1>
            </button>
        </Link>
    )
}