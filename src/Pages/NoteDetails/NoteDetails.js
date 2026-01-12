import { useParams } from "react-router-dom"
import NoteItem from "../../Components/NoteItem/NoteItem"
import style from "./noteDetails.module.css"

export default function NoteDetails({notes}) {
   const {id} =useParams()
   const note = notes.filter((note)=> note.id == id)
     //console.log(note , id)
     return <>
        <h2 className={style.header}>Note Details </h2>
        <NoteItem note ={note[0]} />
     </>

    }
