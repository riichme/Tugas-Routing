import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div>
            <Link to="/"> 
                <img style={{width: "40px", height: "40px", marginLeft: "20px"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pok%C3%A9_Ball.svg/602px-Pok%C3%A9_Ball.svg.png' className="App-logo" alt="logo" />
            </Link>
            <Link to="/myFavorite">
                <button style={{marginLeft: '20px'}} className="btn btn success">My Favorite</button>
            </Link>
        </div>
      </nav>
      <br></br>
      </>
    )
}