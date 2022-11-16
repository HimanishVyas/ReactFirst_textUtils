import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("upper click was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleDownClick = () =>{
    console.log("lower click was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
  }

  const handleClaerClick = () =>{
    console.log("lower click was clicked");
    let newtext = ("");
    setText(newtext);
  }
  
  const handleOnChange = (event) =>{
    console.log("on change");
    setText(event.target.value);
  }

  const [text, setText] = useState("")
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To UpperCase</button>
    
        <button className='btn btn-primary mx-2' onClick={handleDownClick}>Convert To LowerCase</button>

        <button className='btn btn-primary mx-2' onClick={handleClaerClick}>Claer Text</button>

    </div> 
   
    <div className='container my-3'>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} charecters</p>
      <p>{0.008 * text.split(" ").length} Take min to read </p>
    </div>
    </>
  )
}
