import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div id='nn'>
    <div>
            <nav>
                <ul style={{display:"flex"}}>
                    <li><a href='.abc'>Home</a></li>
                    <li><a href='#abt'>About</a></li>
                    <li><a href='#bas'>Commands</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar