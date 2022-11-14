import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("upper click was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleOnChange = (event) =>{
    console.log("on change");
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter text here")
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert To UpperCase</button>
    </div> 
  )
}
