import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './noteForm.module.css'

export default function NoteForm({ onAdd ,onEdit, role , note}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    const note = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString(),
      status,
    };

    onAdd(note);
    console.log(note);
    setTitle("");
    setContent("");
    setStatus("");
    navigate(`/note/${note.id}`);
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h1>{role} Note</h1>

      <div>
        <label className={style.formLabel}>Title:</label>
        <input
          className={style.formInput}
          type="text"
          value={note ? note.title : title}

          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label className={style.formLabel}>Content:</label>
        <textarea
          className={style.formInput}
          value={note ?note.content:content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>

      <div>
        <label className={style.formLabel}>Status:</label>
        <select
          className={style.formInput}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value={note? note.status:""} disabled>Select</option>
          <option value="Active">Active</option>
          <option value="Archived">Archived</option>
          <option value="Important">Important</option>
        </select>
      </div>

      <button type="submit" className={style.button}>{role}</button>
    </form>
  );
}
