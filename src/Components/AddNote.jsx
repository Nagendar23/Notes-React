import React from 'react'
import { useState } from 'react'

const AddNote = ({setNotes}) => {

    const[text,setText] = useState("");

    const addNewNote = ()=>{
        if(text.trim()){
            const newNote = {id: Date.now(),text};
            setNotes((prevNotes)=>[...prevNotes,newNote]);
            setText("");
        }
    }

  return (
    <div className='add-note'>
        <textarea 
        placeholder='Type a note...'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        <button onClick={addNewNote}>Add</button>
    </div>
  )
}

export default AddNote