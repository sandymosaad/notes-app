import React from 'react'
import NoteForm from '../../Components/NoteForm/NoteForm';
import { useParams } from 'react-router-dom';
export default function EditNote({onEdit}){
    const role="Edit"
    const {id} = useParams()
    
    const notes =JSON.parse( localStorage.getItem("notes"))
    const note = notes.filter((note)=>note.id ==id)[0];
    console.log(note , id )  
    return <>
        <NoteForm role ={role} onEdit={onEdit} note={note}/>
  
    </>
  
}
