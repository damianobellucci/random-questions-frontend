import React from "react";

const Form = (props: any) => {
  const newChapter = React.useRef<HTMLInputElement>(null);

  const createChapter = (el: any) => {
    alert(el.current.value);
  };

  return (
    <>
      <form>
        <input type="text" ref={newChapter} placeholder="Insert chapter" />
        <button onClick={() => createChapter(newChapter)}>Send</button>
      </form>
    </>
  );
};
export default Form;
