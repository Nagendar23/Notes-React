import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NotesList = ({notes,setNotes,searchText}) => {
    //filtering the notes based on searching 
    const filteredNotes = notes.filter((note)=>
    note.text.toLowerCase().includes(searchText.toLowerCase())
);
  return (
    <div className='notes-list'>
        {filteredNotes.map((note)=>(
            <Note key={note.id} note={note} setNotes={setNotes}/>
        ))}
        <AddNote setNotes={setNotes}/>
    </div>
  )
}

export default NotesList;