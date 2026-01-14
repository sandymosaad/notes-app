import { Link } from "react-router-dom";
import style from './home.module.css';



export default function Home({notes, onDelete}) {
    //console.log(notes)
    return<>
    <h1 className="header">
        All Notes
    </h1>    
        {notes.map((note) => (
            // Use the <NoteItem /> component here to keep the UI consistent and reduce code duplication.
            <div key={note.id} className="card">
                <div className="cardDisplay">
                    <h3>{note.title}</h3>
                    <span className="noteStatus">{note.status}</span>
                </div>
                <div className="cardDisplay">
                    <Link to={`/note/${note.id}`} className={style.navgationLink}>View More</Link> 
                    <button className="button" onClick={() => onDelete(note.id)}>Delete</button>
                    <p>{new Date(note.createdAt).toLocaleDateString()}</p>
                </div>
            </div>
            ))}
    </> 
    }

