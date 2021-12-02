import { useState, useEffect } from "react";
import Button from "./Button";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);

  return <h1>Hello!</h1>;
}

function App() {
  const [isVisible, setVisible] = useState(true);
  const changeVisibility = () => setVisible((prev) => !prev);

  return (
    <div>
      {isVisible ? <Hello /> : null}
      <Button
        text={isVisible ? "Hide" : "Show"}
        changeVisibility={changeVisibility}
      />
    </div>
  );
}

export default App;
