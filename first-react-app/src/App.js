import { useState, useEffect } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount((prev) => prev + 1);

  const [keyword, setKeyword] = useState("");
  const changeKeyword = (event) => setKeyword(event.target.value);

  useEffect(() => console.log("I run only once"), []);
  useEffect(() => console.log("I run only when 'keyword' changes"), [keyword]);
  useEffect(() => console.log("I run only when 'count' changes"), [count]);
  useEffect(() => console.log("I run only when 'count' or 'keyword' changes"), [count, keyword]);

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={changeKeyword}
        placeholder="Search here..."
      />
      <h1>Total clicks = {count}</h1>
      <Button text="Click me" increaseCount={increaseCount} />
    </div>
  );
}

export default App;
