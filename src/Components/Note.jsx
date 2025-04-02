import React from 'react';

const Note = ({ note, setNotes }) => {
    const deleteNote = () => {
        setNotes(prevNotes => prevNotes.filter(n => n.id !== note.id));
    };

    return (
        <div className='note'>
            <p>{note.text}</p>
            <button onClick={deleteNote}>Delete</button> {/* Fixed onClick event */}
        </div>
    );
};

export default Note;
