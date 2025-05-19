import { useState } from "react";

function Home() {
  const [variable, setVariable] = useState();

  function handleChange(event) {
    setVariable(event.target.value);
  }
  return (
    <>
      <div className="resturant-home">
        <h1>THis is a home page</h1>
        <input type="text" value={variable} />
        <button onChange={handleChange}>Click me </button>
      </div>
    </>
  );
}

export default Home;
