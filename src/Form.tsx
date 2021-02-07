import axios from "axios";

interface interfaceForm {}
export default (props: interfaceForm) => {
  return (
    <>
      <form>
        <input placeholder="Insert chapter"></input>
        <button
          onClick={async (event) => {
            event.preventDefault();
            alert("request");
          }}
        >
          Save
        </button>
      </form>
    </>
  );
};
