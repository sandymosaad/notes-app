import { useParams } from "react-router-dom"
import NoteItem from "../../Components/NoteItem/NoteItem"

export default function NoteDetails({notes}) {
   const {id} =useParams()
   const note = notes.filter((note)=> note.id == id)
     console.log(note , notes, id)
     return <>
        <h2 className="header">Note Details </h2>
        <NoteItem note ={note[0]} />
     </>

    }
