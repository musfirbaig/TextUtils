import React, {useState} from 'react'



export default function TextForm(props) {
    const convertToUpperCase = ()=>{
        let rawText = text.toUpperCase();
        setText(rawText);
    }

    const convertToTitleCase = ()=>{
        let string1 = text;
        let titleCaseWords = [];
        let words = string1.split(" ");
        // console.log(words);
        words.forEach((word)=>{
            if(!(word===" " || word==="")){

            
            let titleCase = word[0].toUpperCase();

            for(let i=1; i<word.length; i++){
                titleCase += word[i].toLowerCase();
            }
            titleCaseWords.push(titleCase);
        }
        })

        titleCaseWords = titleCaseWords.join(" ");
        setText(titleCaseWords);
    }

const [text, setText] = useState("");
  return (
    <>
    <div className="container" >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={(event)=> {
                setText(event.target.value);
                console.log(text);
            }} rows="3"></textarea>
        </div>
        <button className="btn btn-primary" onClick={convertToUpperCase}>To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={convertToTitleCase}>
            To Title Case
        </button>
    </div>

    <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>{text.length===0? 0: text.split(" ").length} words, {text.length} characters</p>
        <p>Read Time: {Math.round(text.split(" ").length/400)} mins</p>
    </div>
    </>
  )
}

