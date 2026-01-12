import { Link } from "react-router-dom";
import style from './home.module.css';



export default function Home({notes, onDelete}) {
    //console.log(notes)
    return<>
    <h1 className={style.header}>
        All Notes
    </h1>    
        {notes.map((note) => (
            <div key={note.id} className={style.card}>
                <div className={style.cardHeader}>
                    <h3>{note.title}</h3>
                     <span className={style.noteStatus}>{note.status}</span>
                </div>
                <div className={style.cardFotter}>
                      <Link to={`/note/${note.id}`} className={style.navgationLink}>View More</Link> 
                      <button className={style.button} onClick={() => onDelete(note.id)}>Delete</button>
                      <p>{new Date(note.createdAt).toLocaleDateString()}</p>
                </div>
              
            </div>
            ))}
    </> 
    }

