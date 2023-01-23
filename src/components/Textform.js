import React,{useState} from 'react'

export default function Textform(props) {
    const handleClick=()=>{
        // console.log('change to uppercase clicked');
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("converted to uppercase","success");
    }
    const handlelowClick=()=>{
        // console.log('change to uppercase clicked');
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("converted to lowercase","success");
    }
    const handleonChange=(event)=>{
        // console.log('on Change clicked');
        setText(event.target.value);
    }
    const handleclear=(event)=>{
        let newText='';
        setText(newText);
        props.showalert("Text area cleared","success");
    }
    const handlecopy=()=>
    {
       let text=document.getElementById('mytext');
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showalert("Text copied to clipboard","success");
    }
    const [text,setText]=useState('');
  return (
    <>
     <div className="container" style={{color:props.mode === "dark" ? "white" : "black"}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" id="mytext" value={text} rows="8" onChange={handleonChange} style={{backgroundColor:props.mode === "dark" ? "grey" : "white",color:props.mode === "dark" ? "white" : "black"}}></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handlelowClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleclear}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode === "dark" ? "white" : "black"}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Read in {0.008*text.split(" ").length} minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
   
  )
}
