import React, { useEffect,useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import About from './About';
import Navbar from './Navbar';
import Basic from './Basic';

function App() {
  const [markdown, setMarkdown] = useState('# Markdown statements ');
  const textAreaRef = useRef(null);
  const previewRef = useRef(null);
  useEffect(() =>{
    document.title='Markdown Previewer';
  },[]);

  const handlePaste = () => {
    const clipboardData = navigator.clipboard;
    clipboardData.readText().then((pastedData) => {
      setMarkdown(`${markdown}${pastedData}`);
    });
  };

  const handleCopy = () => {
    const preview = previewRef.current;
    const range = document.createRange();
    range.selectNode(preview);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  };

  function handleChange(event) {
    setMarkdown(event.target.value);
  }

  return (
    <div>
      <Navbar/>
    <div className='abc' style={{ background: 'linear-gradient(90deg, rgba(9,6,61,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)' }}>
      <h1>Markdown Previewer</h1>
        <br></br>
    <div className="container">
      <div className="editor">
        <textarea ref={textAreaRef} onChange={handleChange} value={markdown} />
        <button id="pa" onClick={handlePaste}>Paste</button>
      </div>
      <div ref={previewRef} className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      <button id="co" onClick={handleCopy}>Copy</button>
      <hr id='ll'></hr>
      <h3 id='footer'>For Basic Syntax-<a id='aa' href='https://www.markdownguide.org/basic-syntax/'>Click Here</a></h3>
   </div></div>
   <About/>
   <Basic/>
   
</div>
  );
}

export default App;