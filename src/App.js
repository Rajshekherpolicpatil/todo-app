import { useState } from "react";
export default function App() {
  const [store, setStore] = useState([]);
  const [cart, setCart] = useState([]);
  const [initialValue, setInitialValue] = useState("");
  const [show, setShow] = useState(false);

  const handleadd = function () {
    if (store.includes(initialValue)) {
      alert("you have already added this item");
      return;
    } else setStore((store) => [...store, initialValue]);
  };

  const handleShow = function () {
    setShow((show) => !show);
  };

  return (
    <div className="container border">
      <div className="inputbox ">
        <input
          type="text"
          placeholder="Enter here..."
          value={initialValue}
          onChange={(e) => setInitialValue(e.target.value)}
        ></input>
        <button onClick={handleadd}>Add</button>
      </div>

      {store.length > 0 ? (
        <ol className="border">
          {store.map((el) => (
            <StoteDisplay
              el={el}
              setCart={setCart}
              setStore={setStore}
              key={el}
            />
          ))}
        </ol>
      ) : (
        <></>
      )}
      <button onClick={handleShow}>Conformed product</button>
      {show ? (
        <ul className="border">
          {cart.map((el) => (
            <ConformedProduct el={el} key={el} />
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
function StoteDisplay({ el, setCart, setStore }) {
  return (
    <li>
      {el}
      <Addbutton setCart={setCart} el={el} setStore={setStore} />
      <Deletebutton setCart={setCart} el={el} setStore={setStore} />
    </li>
  );
}

function ConformedProduct({ el }) {
  return <li>{el}</li>;
}

function Addbutton({ setCart, el, setStore }) {
  const handleadd = function () {
    setCart((cart) => [...cart, el]);
    setStore((store) => {
      const arr = store.filter((ele) => el !== ele);
      return [...arr];
    });
  };

  return (
    <button className="combutton green" onClick={handleadd}>
      Conform
    </button>
  );
}

function Deletebutton({ setCart, el, setStore }) {
  const handledelete = function () {
    setCart((cart) => {
      const arr = cart.filter((ele) => el !== ele);
      return [...arr];
    });
    setStore((store) => {
      const arr = store.filter((ele) => el !== ele);
      return [...arr];
    });
  };

  return (
    <button className="combutton red" onClick={handledelete}>
      remove
    </button>
  );
}
