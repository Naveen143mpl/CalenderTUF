import { useState, useEffect } from "react";

function Notes() {
  const [note, setNote] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("note");
    if (saved) setNote(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("note", note);
  }, [note]);

  return (
    <div className="calendar-card">
      <h3>Notes</h3>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes..."
      />
    </div>
  );
}

export default Notes;