import { useState } from "react";

function Todo() {
  const [text, setText] = useState("");

  // const handleChange = (event) => {
  //   console.log(event);
  //   console.log(event.target);
  //   setText(event.target.value);
  // };

  return (
    <div className="border-solid bg-lime-100 border-lime-800 border-2 max-w-[450px] rounded-xl flex flex-col text-gray-800 font-bold items-center selection:bg-green-700 selection:text-lime-50">
      <div className="input m-2">
        <input
          className="bg-lime-300 rounded-xl m-3 p-3 border-2 border-lime-800 outline-none hover:bg-lime-400 focus:bg-lime-400 text-xl"
          placeholder="Type..."
          name="input-element"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className="bg-lime-300 m-1 p-3 border-2 border-lime-800 placeholder-lime-900 rounded-[10px] text-xl hover:bg-lime-400 transition-colors duration-200 cursor-pointer">
          Add
        </button>
      </div>
      <p className="m-2 text-color-lime-800 text-[18px]">You typed: {text}</p>
    </div>
  );
}

export default Todo;
