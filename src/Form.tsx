import React, { useState } from "react";

const Form = (props: any) => {
  const newChapter = React.useRef<HTMLInputElement>(null);
  const [showAddChapter, updateShowAddChapter] = useState(false);

  const createChapter = (el: any) => {
    alert(el.current.value);
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
