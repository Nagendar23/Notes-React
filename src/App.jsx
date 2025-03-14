import React, { useState, useEffect } from 'react';
import NotesList from './Components/NotesList';
import Search from './Components/Search';
import ToggleTheme from './Components/ToggleTheme';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  // Load notes from local storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) setNotes(savedNotes);
  }, []);

  // Save notes to local storage when notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Apply dark mode 
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="app">
      <h1>Notes App</h1>
      <ToggleTheme darkMode={darkMode} setDarkMode={setDarkMode} />
      <br />
      <label >Search🔍 </label>
      
      <Search setSearchText={setSearchText} />
      <label>Notes📝</label>
      <NotesList notes={notes} setNotes={setNotes} searchText={searchText} />
    </div>
  );
};

export default App;
