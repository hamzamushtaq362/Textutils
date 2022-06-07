import React, { useState } from 'react'

export default function TextForm(props) {
  const handelupclick= ()=>{
    // console.log('upper case was invoked' + text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showalert("converted to upperCase", 'success');
  }

  const handelloclick= ()=>{
    // console.log('upper case was invoked' + text);
    let newText= text.toLowerCase();
    setText(newText);
    props.showalert("converted to LowerCase", 'success');
  }

  const handelClearclick= ()=>{
    // console.log('upper case was invoked' + text);
    let newText= " ";
    setText(newText);
    props.showalert("Screen Claered", 'success');
  }

  const handelInverseclick= ()=>{
    // console.log('upper case was invoked' + text);
    let newText= text.split("").reverse().join("");
    setText(newText);
    props.showalert("converted to Inverse", 'success');
  }

  const handleonchange= (event)=>{  
    console.log('on change');
    setText(event.target.value);
  }

  
  
  const [text, setText] = useState('');
  return (
    <>


        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>

        
        <h1>{props.heading}</h1>
        <div className="mb-3" >
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'#121a3c'}} onChange={handleonchange} id="mybox" rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-1" onClick={handelupclick}>Click to upper</button>

        <button className="btn btn-primary my-3 mx-1" onClick={handelloclick}>Click to lower</button>

        <button className="btn btn-primary my-3
         mx-1" onClick={handelClearclick}>Click Clear</button>

        <button className="btn btn-primary my-3 mx-1" onClick={handelInverseclick}>Click inversse</button>


        </div>
        </div>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
          <h1>Your Text</h1>
          <p>Total Words {text.split(' ').length} Characters {text.length}</p>
          <p>{0.008 * text.split(' ').length} Time </p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter Text to continue"}</p>
        </div>
    </>
  )
}
