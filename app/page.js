"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      desc,
    };
    setmainTask([...mainTask, newTask]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteTask = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };
  let renderTask = (
    <div className="text-black pt-5 text-bold text-center text-3xl">
      No task here
    </div>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <div>
          <li key={i} className="flex justify-between  ">
            <div>
              <h1 className="text-xl text-bold text-black">{t.title} </h1>
            </div>
            <div>
              <h3 className="text-md text-bold text-black">{t.desc} </h3>
            </div>
            <div>
              <button onClick={() => {}} className="p-5 m-5 bg-green-600">
                Tick Mark
              </button>
              <button
                onClick={() => {
                  deleteTask(i);
                }}
                className="p-5 m-5 bg-red-600"
              >
                Delete Task
              </button>
            </div>
          </li>
        </div>
      );
    });
  }

  return (
    <div className="w-1/3 h-2/4  m-10 p-10 items-center bg-red-500 ">
      <h1 className="w-full h-20 text-center text-3xl pt-5 bg-black text-white font-bold">
        Todo List
      </h1>

      <div className=" first-letter:">
        <form onSubmit={submitHandler}>
          <input
            className="m-5 p-5 border-black"
            placeholder="Enter Title here"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          ></input>
          <input
            className=" m-5 p-5 border-black"
            placeholder="Enter Description here"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          ></input>
          <button className="bg-black text-white p-5 m-5 rounded-md ">
            Add Todo
          </button>
        </form>
      </div>
      <hr className=" "></hr>
      <div className="">{renderTask} </div>
    </div>
  );
};

export default page;
