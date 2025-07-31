import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    // TODO: add validation for empty notes
    if (note.title.trim() !== "" && note.content.trim() !== "") {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
    }
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="create-area">
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Take a note..."
            autoComplete="off"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="What's on your mind?"
          rows={isExpanded ? 3 : 1}
        />

        <button
          onClick={submitNote}
          className={isExpanded ? "add-button expanded" : "add-button"}
        >
          <span>+</span>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
