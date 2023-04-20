import React from 'react'
import './Basic.css'

function Basic() {
  return (
    <div id='bas' style={{ background: 'linear-gradient(90deg, rgba(9,6,61,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}}>
        <center>
        <div  style={{height:"700px",width:"100%"}}>
            <br/>
            <h1 >Basic Commands</h1>
            <hr id='ln'></hr>
            <br/>
            <div>
                <h1 id='titl'>Bold</h1>
                <li id='l'># - h1</li>
                <li id='l'>## - h2</li>
                <li id='l'>### - h3</li>
                <li id='l'>#### - h4</li>
                <li id='l'>##### - h5</li>
                <li id='l'>###### -h6</li>
                <h1 id='titl'>Italics</h1>
                <li id='l'>*_statement</li>
                <h1 id='titl'>Bold Italic</h1>
                <li id='l'># *_statements</li>
                <h1 id='titl'>Strike Throughs</h1>
                <li id='l'>~~ statements ~~</li>
            </div>
        </div>
        </center>
    </div>
  )
}

export default Basic