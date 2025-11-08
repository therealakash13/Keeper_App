import { useState } from "react";
import CreateArea from "./component/CreateArea";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Note from "./component/Note";

function App() {
  const [keptItem, setKeptItem] = useState([]);

  function addItems(title, content) {
    setKeptItem((prev) => [...prev, { title: title, content: content }]);
  }

  return (
    <div>
      <Header />
      <CreateArea add={addItems} />
      {keptItem.map((note,idx) => (
        <Note title={note.title} content={note.content} key={idx} />
      ))}

      <Footer />
    </div>
  );
}
export default App;
