import React from 'react';

export default function ListTask(props) {
    return (
        <div className="d-flex justify-content-center mt-3" >
            <ul className="list-group" style={{ maxWidth: '400px', width: '100%' }}>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{backgroundColor: props.mode==='light'? 'white':'#212529', color: props.mode==='light'?'black':'white'}}>
                    {props.item}
                    <span style={{cursor:'pointer', transition: 'color 0.2s', color: props.mode === 'light' ? 'black' : 'white'}} onMouseEnter={e => e.currentTarget.style.color = 'red'} onMouseLeave={e=>e.currentTarget.style.color=props.mode === 'light' ? 'black' : 'white'}>
                        <i className="fa-solid fa-trash-can" style={{cursor:'pointer', transition:'red 0.3s'}} onClick={e=>{
                            props.deleteItem(props.index);
                        }}></i>
                    </span>
                </li>
            </ul>
        </div>
    );
}
