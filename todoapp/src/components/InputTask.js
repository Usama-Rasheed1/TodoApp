import React, {useState} from 'react';

export default function InputTask(props) {
    const[inputT, setInputT]=useState('');
    const handleEnter=(e)=>{
        if(e.keyCode===13 && inputT.length!==0){
            props.addList(inputT) 
            setInputT('')
        }
    }
    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="input-group" style={{ maxWidth: '400px' }}>
                <input type="text" style={{backgroundColor: props.mode==='light'? 'white':'#212529', color: props.mode==='light'?'black':'white'}} onChange={e=>{
                    setInputT(e.target.value)
                }} onKeyDown={handleEnter} value={inputT} className="form-control" placeholder={props.placeholder} />
                <button className={`btn btn-info ms-2 ${inputT.length===0? 'disabled' : ''}`} style={{color: props.mode==='light'?'black':'white', borderRadius: '50px'}} onClick={()=>{props.addList(inputT) 
                    setInputT('')}} type="button">+</button>
            </div>
        </div>
    );
}
