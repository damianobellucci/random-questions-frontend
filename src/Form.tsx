import React, { useState } from "react";
import axios from "axios";

const Form = (props: any) => {
  const newChapter = React.useRef<HTMLInputElement>(null);
  const [showAddChapter, updateShowAddChapter] = useState(false);

  const createChapter = async (el: any) => {
    let result = await axios.post("http://localhost:8085/addChapter", {
      chapter: el.current.value,
    });
    console.log(result);
  };

  const showChapters = async () => {
    let result = await axios({
      url: "http://localhost:8085/showChapters",
      method: "get",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    });
    console.log("risultato " + result);
  };

  return (
    <>
      <button
        onClick={(event) => {
          event.preventDefault();
          updateShowAddChapter(true);
        }}
      >
        Add chapter
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          showChapters();
        }}
      >
        Show chapters
      </button>
      {showAddChapter && (
        <form>
          <input type="text" ref={newChapter} placeholder="Insert chapter" />
          <button
            onClick={(event) => {
              event.preventDefault();
              createChapter(newChapter);
              updateShowAddChapter(false);
            }}
          >
            Send
          </button>
        </form>
      )}
      <ul>
        {["chapter1", "chapter2", "chapter3"].map((el, idx) => {
          return <li>{el}</li>;
        })}
      </ul>
    </>
  );
};
export default Form;
