import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { changeName } from "./redux/module/cat";
function App() {
  const cat = useSelector((state) => state.cat);
  console.log(cat);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>name:::{cat.name}</p>
      <button
        onClick={() => {
          dispatch(changeName("루비"));
        }}
      >
        이름 바꾸기
      </button>
    </div>
  );
}

export default App;
