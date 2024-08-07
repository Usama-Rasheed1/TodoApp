import './App.css'; 
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import InputTask from './components/InputTask';
import ListTask from './components/ListTask';

function App(){ 

  const[mode, setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }

  const[listTodo, setListTodo]=useState([]);
  let addList=(inputT)=>{
    if(inputT.length!==0)
      setListTodo([...listTodo, inputT]);
  }
  const deleteList=(key)=>{
    let newList=[...listTodo];
    newList.splice(key, 1);
    setListTodo(newList);
  }

  return(
    <>
      <Navbar title="To-do List" mode={mode} toggleMode={toggleMode}/>
      <InputTask placeholder="Enter Task" mode={mode} addList={addList}/>
      <div className="container">
        <h1 className='mt-4' >Todo List:</h1>
        
        {listTodo.length === 0 ? (
          <strong style={{display: 'flex', justifyContent:'center'}}>No tasks available</strong>
        ) : (
          listTodo.map((listItem, i) => (
            <ListTask key={i} item={listItem} index={i} mode={mode} deleteItem={deleteList}/>
          ))
        )}

      </div>
      

    </>
  )
}

export default App;
