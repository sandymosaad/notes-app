import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddNote from "./Pages/AddNote/AddNote";
import NoteDetails from "./Pages/NoteDetails/NoteDetails";
import EditNote  from "./Pages/EditNote/EditNote";

import { useState, useEffect } from "react";
import Layout from "./layout/layout"

function App() {
  const [notes, setNotes] = useState(()=>{
    const saved = localStorage.getItem("notes");
    return saved? JSON.parse(saved) : [];
  })

  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  function addNote(note){
    setNotes((prevNotes) => [...prevNotes,note]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((note) => note.id !== id)
      localStorage.setItem("notes", JSON.stringify(updatedNotes)); 
      return updatedNotes;
    });

  }

function editNote(id){
  console.log('sdsf')
}

  const routers = createBrowserRouter([
     {
        path: "/",
        element: <Layout />,
        children: [    
          { index: true, element: <Home notes={notes} onDelete={deleteNote} /> },
          { path: "/add", element: <AddNote onAdd={addNote} /> },
          { path: "/note/:id", element: <NoteDetails notes={notes} /> },
          { path: "/edit/:id", element: <EditNote notes={notes} onEdit={editNote}/> },

        ]
        },

  ]);
  return <RouterProvider router={routers} />;
}

export default App;

