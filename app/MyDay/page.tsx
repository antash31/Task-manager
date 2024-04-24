"use client";
import { Main } from "@/components";
import { RootState } from "@/state/store";
import { Provider, useDispatch, useSelector } from "react-redux";

const MyDay = () => {
  const Mainlist = useSelector((state: RootState) => state.tasks.list);

  const list = Mainlist.filter((item, index) => {
    return item.listType.indexOf("My Day") != -1;
  });
  return (
    <>
      <Main list={list} heading={"My Day"} />
    </>
  );
};

export default MyDay;
