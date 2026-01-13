
import NoteForm from "../../Components/NoteForm/NoteForm";
import addNote from "../../assets/add-note.jpeg";
import style from "./addNote.module.css";

export default function AddNote({ onAdd }) {
  const role = "Add"
  return (
    <div className={style.container}>
      <img className={style.addNoteImg} src={addNote} alt="Add Note" />
      <NoteForm onAdd={onAdd} role={role}  />
    </div>
  );
}
