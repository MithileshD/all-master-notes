import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ParentUseEffExe from "./quizes/1111/ParentHook";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisbaled] = useState(false);
  const [toDoList, setToDoList] = useState([]);

  // console.log('step 1')
  // setTimeout(()=>console.log('step 2'),0)
  // Promise.resolve('Step3').then((res)=>console.log(res + 'step 3'))
  // console.log('step 4')

  const handleChange = (e) => {
    switch (e.target.id) {
      case "name-key":
        setName(e.target.value);
        break;

      case "email-key":
        setEmail(e.target.value);
        break;

      default:
        break;
    }
    // return;
  };

  const fetchData = async () => {
    return await axios.get("https://dummyjson.com/todos?limit=10&skip=0");
  };

  const handleSubmit = (e) => {
    if (name && name !== "" && email && email !== "") setIsDisbaled(true);
    const response = fetchData();

    response.then((res) => {
      console.log(res.data.todos);

      setToDoList(res.data.todos)
    });

    // switch (e.target.id) {
    //   case "name-key":
    //     setName(e.target.value);
    //     break;

    //   case "email-key":
    //     setEmail(e.target.value);
    //     break;

    //   default:
    //     break;
    // }
    // return;
  };

  // useEffect(() => {
  //   if (name && name !== "" && email && email !== "") setIsDisbaled(true);
  // }, []);

  console.log('todo', toDoList);
  
  return (
    <>
      {/* <ParentUseEffExe /> */}
      {/* <div> */}

      <div>Name</div>
      <input id="name-key" value={name} onChange={(e) => handleChange(e)} />

      <div>Email</div>
      <input id="email-key" value={email} onChange={(e) => handleChange(e)} />

      <div>
        <button disabled={isDisabled} onClick={(e) => handleSubmit(e)}>
          Submit{" "}
        </button>

        {/* <ul>
          <li>
            1st Todo
          </li>
        </ul> */}

        <ul>
          {toDoList.map((toDo) => {
            console.log('toDo', toDo);
            return <li>{toDo.todo}</li>;
          })}
        </ul>
      </div>

      {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
