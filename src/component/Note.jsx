function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>
        <span class="material-symbols-outlined">delete_forever</span>
      </button>
    </div>
  );
}
export default Note;
