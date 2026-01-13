import { Link } from "react-router-dom"

export default function NoteItem({note}){
    return <>
    <div className="card">
        <div className="cardDisplay">
            <h3 >
                {note.title}
            </h3>
            
            <p className="noteStatus">
                {note.status}
            </p>
        </div>

        <p >
            {note.content}
        </p>

        <div className="cardDisplay">
            <p>
                {new Date(note.createdAt).toLocaleDateString()}
            </p>
            <Link className="button" to={`/edit/${note.id}`}>Edit</Link>
            
            <p> 
                {new Date(note.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </p>
        </div>

    </div>
    
    </>
}