function Note(props) {
  function handleDelete(e) {
    e.preventDefault();
    props.delete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>
        <span class="material-symbols-outlined">delete_forever</span>
      </button>
    </div>
  );
}
export default Note;
