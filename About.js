import React from 'react'
import './About.css'

function About() {
  return (
    <div id='abt' style={{ background: 'linear-gradient(45deg, #992a70, #f45c5d, #e8a87c)'}}>
        <center>
        <div  style={{height:"700px",width:"100%"}}>
            <br/>
            <h1>About</h1>
            <hr id='ln'></hr>
            <br/>
            <div>
                <h1 id='que'>What is Markdown ?</h1>
                <h4 id='ans'>Markdown is a lightweight markup language with plain text formatting syntax.<br></br> It is a simple way to add formatting like headers, bold, bulleted lists, and so on to a plain text.<br></br> Markdown uses a simple formatting syntax to accomplish the same thing that HTML does, but it is simpler than HTML.</h4>
                <h1 id='que'>Need for Markdown</h1>
                <h4 id='ans'><li>Simple Learning Curve: Markdown is very simple to learn. The official syntax can be found on the website: daringfireball.  
</li><li>Easy HTML Conversion: Markdown has built-in software to convert a plain text to HTML.
<li></li>Create Static Sites Easily: Markdown empowers you to make free, simple, and static sites utilizing open-source tools like Mkdocs, Jekyll, or Read the Docs.  
<li></li>Easy Sharing and Syncing: You can easily sync and share files created in the Markdown editor to Dropbox, Google Drive, and WordPress.  
<li></li>Diversification: Since Markdown is just plain text, it can be converted into a bunch of formats like PDF, epub, Docx, HTML, etc. </li></h4>
<h1 id='que'>Where can markdown be viewed ?</h1>
                <h4 id='ans'><li>Since these MD files are just plain text documents, you can open one with any text editor, like Notepad or WordPad in Windows.</li></h4>
        </div>
        </div>
        </center>
    </div>
  )
}

export default About