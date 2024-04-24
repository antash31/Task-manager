"use client";
import { Main } from "@/components";
import { RootState } from "@/state/store";
import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";

const Important = () => {
  const Mainlist = useSelector((state: RootState) => state.tasks.list);

  const list = Mainlist.filter((item, index) => {
    return item.listType.indexOf("Important") != -1;
  });
  console.log("Helo - ", list);
  return (
    <>
      <Main list={list} heading={"Important"} />
    </>
  );
};

export default Important;
