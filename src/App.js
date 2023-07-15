import "./styles.css";
import { useState } from "react";

let arr = ["play cricket", "play football", "play tennis"];

export default function App() {
  const [store, setStore] = useState(arr);
  console.log(store);
  const [selectIndex, setSelectIndex] = useState([]);
  console.log("selectIndex array", selectIndex);

  const handleDelete = (val, index) => {
    console.log(index);
    const filterElement = store.filter((value, i) => {
      return index !== i;
    });
    setStore(filterElement);
  };

  const handleInput = (val, index) => {
    console.log(" if i click on check box ", index);
    if (selectIndex.includes(index)) {
      const rst = selectIndex.filter((val, i) => {
        return val !== index;
      });
      console.log("rst  filter rst", rst);
      setSelectIndex(rst);
    } else {
      setSelectIndex([...selectIndex, index]);
    }
  };
  return (
    <div className="App">
      {store.map((value, index) => {
        return (
          <div>
            <ul>
              <input
                type="checkbox"
                onChange={(e) => handleInput(e.target.value, index)}
              />
              {value}
              {selectIndex.includes(index) && (
                <button onClick={(e) => handleDelete(e.target.value, index)}>
                  delete
                </button>
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
