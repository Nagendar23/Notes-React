import React from 'react'

const Note = ({note,setNotes}) => {
    const deleteNote = ()=>{
        setNote((prevNotes)=> prevNotes.filter((n)=>n.id != note.id))
    }
  return (
    <div className='note'>
        <p>{note.text}</p>
        <button>Delete</button>
    </div>
  )
}

export default Note