import { Link } from "react-router-dom"
import style from "./noteItem.module.css"

export default function NoteItem({note}){
    return <>
    <div className={style.card}>
        <div className={style.titleContainer}>
            <h3 className={style.cardTitle}>
                {note.title}
            </h3>
            
            <p className= {style.noteStatus}>
                {note.status}
            </p>
        </div>

        <p className={style.cardBody}>
            {note.content}
        </p>

        <div className={style.date}>
            <p>
                {new Date(note.createdAt).toLocaleDateString()}
            </p>
            <Link className={style.button} to={`/edit/${note.id}`}>Edit</Link>
            
            <p> 
                {new Date(note.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </p>
        </div>

    </div>
    
    </>
}