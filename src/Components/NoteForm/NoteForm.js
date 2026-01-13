import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from './noteForm.module.css'

export default function NoteForm({ onAdd ,onEdit, role , noteValues}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  useEffect( ()=>{
  if(role === "Edit" && noteValues){
      setTitle(noteValues.title);
      setContent(noteValues.content);
      setStatus(noteValues.status);  }

  },[role,noteValues])

  function handleSubmit(e) {
    e.preventDefault();
    //console.log(`noteValues: ${noteValues}`);

    let note={};
    if(role === "Edit"){
      note = {
        id : noteValues.id,
        title : title || noteValues.title,
        content : content || noteValues.content,
        createdAt: noteValues.createdAt,
        status: status || noteValues.status,
        updatedAt: new Date().toISOString(),
      };
    }else{
    note = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString(),
      status,
    };
    }
    console.log(`note:${note}`);

    if(role === "Add"){
          onAdd(note);
    }
    else if(role === "Edit"){
          onEdit(note);
    }
    console.log(note);
    setTitle("");
    setContent("");
    setStatus("");
    navigate(`/note/${note.id}`);
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h1 className={style.header} >{role} Note</h1>

      <div>
        <label className={style.formLabel}>Title:</label>
        <input
          className={style.formInput}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label className={style.formLabel}>Content:</label>
        <textarea
          className={style.formInput}
          value={content}
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
          <option value={""} disabled>Select</option>
          <option value="Active">Active</option>
          <option value="Archived">Archived</option>
          <option value="Important">Important</option>
        </select>
      </div>

      <button type="submit" className={style.button}>{role}</button>
    </form>
  );
}
