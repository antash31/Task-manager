import { Main } from "@/components";
import { RootState } from "@/state/store";
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import { useSelector } from "react-redux";

const Tasks = () => {
  const list = useSelector((state: RootState) => state.tasks.list);

  return (
    <>
      <Main list={list} heading={"Tasks"} />
    </>
  );
};

export default Tasks;
