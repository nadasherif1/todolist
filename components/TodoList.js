// "use client"
// import { useState } from "react"

// export default function TodoList() {
// const [todos,setTodos]=useState([])
// const [input,setInput]=useState("")



// // Addtodo
// const AddTodo=()=>{
//    if(input.trim()) {
//     setTodos([...todos,{text:input,isDone:false}])
//     setInput("")
//    }
// }
// // TogelDone
// const ToggelDone=(index)=>{
// const newTodos=todos.map((todo,i)=>i===index?{...todo,isDone:!todo.isDone}:todo)
// setTodos(newTodos)
// }
// // RemoveTodo
// const RemoveTodo=(index)=>{
//     const newTodos=todos.filter((_,i)=>i!==index)
//     setTodos(newTodos)
// }
//   return (
//     <section className="container mx-auto p-4 bg-white rounded-lg shadow-md">
//         <h1 className="text-3xl font-extrabold text-center mb-6">Your Fav To Do List</h1>
// <div className="flex justify-center items-center ">
//     <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blak" placeholder="Add Nwe Tasks" />
   
//  <button onClick={AddTodo} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 tranisition-colors duration-300">Add</button>
//  </div>
//     <ul className="list-none py-5 space-y-2 flex flex-col">
//     {todos.map((todo, index) => (
//   <li key={index} className={`flex justify-between  items-center p-3 rounded-md transition-all ${todo.isDone ? "bg-green-500" : "bg-gray-100"}`}>
//     <span className={`flex-grow px-4 py-2 ${todo.isDone?"line-through text-gray-500" : "text-black"}`}>{todo.text}</span>
//     <div className="flex gap-2 px-4 py-2">
//         <button onClick={()=>ToggelDone(index)} className={`text-white rounded-md  ${todo.isDone?'bg-yellow-500 hover:bg-yellow-600  transition-colors duration-300' : 'bg-blue-500 hover:bg-blue-600 transition-colos duration-300  '} `}>
//             {todo.isDone?"UnDone":"Done"}
//         </button>
//         <button onClick={() => RemoveTodo(index)} className="bg-red-500 text-white p-2 rounded-lg">
//             Delete
//           </button>
//         </div> 
//          </li>
// ))}
//     </ul>

//     </section>
//   )
// }


"use client";
import { useState, useEffect } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    }
    return [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  //  Add todo
  const AddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, isDone: false }]);
      setInput("");
    }
  };

  // toggle
  const ToggelDone = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(newTodos);
  };

  //  remove
  const RemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <section className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold text-center mb-6">
        Your Fav To Do List
      </h1>
      <div className="flex justify-center items-center ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="Add New Tasks"
        />
        <button
          onClick={AddTodo}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Add
        </button>
      </div>
      <ul className="list-none py-5 space-y-2 flex flex-col">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-3 rounded-md transition-all ${
              todo.isDone ? "bg-green-500" : "bg-gray-100"
            }`}
          >
            <span
              className={`flex-grow px-4 py-2 ${
                todo.isDone ? "line-through text-gray-500" : "text-black"
              }`}
            >
              {todo.text}
            </span>
            <div className="flex gap-2 px-4 py-2">
              <button
                onClick={() => ToggelDone(index)}
                className={`text-white rounded-md ${
                  todo.isDone
                    ? "bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300"
                    : "bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
                }`}
              >
                {todo.isDone ? "UnDone" : "Done"}
              </button>
              <button
                onClick={() => RemoveTodo(index)}
                className="bg-red-500 text-white p-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
