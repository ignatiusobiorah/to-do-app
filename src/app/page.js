"use client";

import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react-dom";
import AddTask from "./components/addTask";
import TodoList from "./components/todoList";

export default function Home() {
  // const [view, setView] = useState(false);

  return (
    <div className="p-4">
      <header className="item-center flex justify-center">
        <h1>To do App</h1>
      </header>
      <main className="flex justify-center h-[80vh]">
        <div className="border-2 border-gray-300 p-4 w-[50%]">
          <div className="mb-4">
            <p>Today</p>
            <div className="">
              <span></span>9 Tasks
            </div>
          </div>
          <div className="flex justify-between mb-7">
            <span className="flex items-center gap-1 cursor-pointer"><RiArrowDropDownLine />overdue</span>
            <span>Tasks</span>
          </div>
          <TodoList />
           <AddTask/>
        </div>
       
      </main>
      <footer></footer>
    </div>
  );
}
