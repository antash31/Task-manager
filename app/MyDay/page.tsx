"use client";
import { Main } from "@/components";
import { RootState } from "@/state/store";
import { Provider, useDispatch, useSelector } from "react-redux";

const MyDay = () => {
  const list = useSelector((state: RootState) => state.tasks.list);

  return (
    <>
      <Main list={list} heading={"My Day"} />
    </>
  );
};

export default MyDay;
