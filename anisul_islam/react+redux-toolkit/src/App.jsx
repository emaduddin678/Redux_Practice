import CounterView from "./features/counter/CounterView";
import "./App.css";
import { useState } from "react";
import PostView from "./features/posts/PostView";

function App() {
  // const [x, setX] = useState(0);
  return (
    <>
      {/* <h1>{x}</h1>
      <button onClick={() => setX((x) => x + 1)}>Test Increment value</button> */}
      <h1>Redux toolkit</h1>
      {/* <CounterView /> */}
      <PostView />
    </>
  );
}

export default App;
