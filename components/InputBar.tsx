"use client";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useState } from "react";
import { InputBarProps } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { addTask } from "@/state/TaskSlice/TaskSlice";

const InputBar = ({ heading }: InputBarProps) => {
  const [newTask, setNewTask] = useState<string>("");
  const list = useSelector((state: RootState) => state.tasks.list);
  const dispatch = useDispatch();

  function handleNewTask() {
    const newTaskTemplate = {
      id: `tasks${String(Date.now())}`,
      timeOfCreation: Date.now(),
      taskname: newTask,
      listType: [`${heading}`],
      steps: [],
      dueDate: null,
      Repeat: null,
      file: [],
      Notes: "",
    };
    setNewTask("");
    console.log(newTaskTemplate);
    return dispatch(addTask(newTaskTemplate));
  }

  return (
    <div className="flex items-center h-[40px] w-[100%] bg-custom-black rounded-md text-white p-1">
      <AddRoundedIcon onClick={handleNewTask} />
      <input
        type="text"
        placeholder="Add a Task"
        className="w-[80%] bg-custom-black focus:outline-none font-jersey-20 m-1"
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") handleNewTask();
        }}
        value={newTask}
      />
    </div>
  );
};

export default InputBar;
