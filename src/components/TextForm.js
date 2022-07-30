import React, { useState } from 'react'

export default function TextForm(props) {

    

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleULoClick = () => {
        let loText = text.toLowerCase();
        setText(loText);
    }
    const handleClearClick = () => {
        let cText = "";
        setText(cText);
    }


    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3 className='mb-3'>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" style={{
                        backgroundColor: props.mode === 'dark' ? 'silver' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleULoClick}>Convert to Lower Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
