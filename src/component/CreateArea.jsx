import { useState } from "react";

function CreateArea(props) {
  const [keep, setKeep] = useState({ title: "", content: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setKeep((prev) => ({ ...prev, [name]: value }));
  }
  
  function handleAdd(e) {
    e.preventDefault();
    props.add(keep.title,keep.content);
    setKeep({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={keep.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={keep.content}
          required
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
