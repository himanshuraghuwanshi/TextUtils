import React , { useState } from "react"

export default function TextForm(props) {
    const [findword , setfindword]  = useState('');
    const [replaceword , setreplaceword]  = useState('')
    const [text, settext] = useState('');
    const [words, setwords] = useState(0);
    const handleOnchange=(event)=>{
        settext(event.target.value);
        CountWords();
    };
    const handleUpclick = ()=>{
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("converted to upperCase" , "success");
    }
    const handleLowclick=()=>{
        let newtext = text.toLowerCase();
        settext(newtext);
       
    }
    const handlclearclick=()=>{ props.showAlert("converted to LowerCase" , "success");
        let newtext = '';
        settext(newtext);
        props.showAlert("Text cleared" , "success");
    }
    const handlereplaceword=()=>{
        let arr = text.split(' ');
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i]=== findword){
                arr[i] = replaceword;
            }
        }
        settext(arr.join(' '));
        props.showAlert("Word Replaced" , "success");
    }
    const CountWords = () => {
        let newarr = text.trim().split(/\s+/);
        setwords(newarr.length === 1 && newarr[0] === "" ? "0" : newarr.length.toString());
      };
      
    return (
        <>
          <div className="container" style={{color: props.mode === 'light'? ' #042743' : 'white'}} >
            <h1 style={{color: props.mode === 'light'? ' #042743' : 'white'}}>{props.heading}</h1>
            <div className="mb-3">
                 <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light'? 'white' : '#061326' , color : props.mode === 'dark'?'white':' #042743'}} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpclick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowclick}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={handlclearclick}>Clear text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light'? ' #042743' : 'white'}}>
            <h2>Your text summary</h2>
            <p>{words} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read this text</p>
            <h2>preview</h2>
            <p>{text.length>0?text:"enter somthing in the above textbox to preview it here"}</p>
            <button className='btn btn-primary mx-2' onClick={handlereplaceword}>Replace Word</button>
            <div className="my-3" >
            <input type="text" placeholder="enter replaced" value={findword} onChange={(e)=>setfindword(e.target.value)} className="mx-2" id="t1" style={{backgroundColor: props.mode === 'light'? 'white' : '#061326' , color : props.mode === 'dark'?'white':' #042743'}}/>
            <input type="text" placeholder="enter replacing" value={replaceword} onChange={(e)=>setreplaceword(e.target.value)} className="mx-2" id="t2" style={{backgroundColor: props.mode === 'light'? 'white' : '#061326' , color : props.mode === 'dark'?'white':' #042743'}}/>
            </div>
        </div>
        </>
    )
}   
