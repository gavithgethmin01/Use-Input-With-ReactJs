import { useState } from "react";

function Todo() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="bg-amber-200 h-screen">
      <input type="text" value={text} onChange={handleChange} />
      <button className="">Add</button>
      <p>You typed: {text}</p>
    </div>
  );
}

export default Todo;
