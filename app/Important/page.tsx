"use client";
import { Main } from "@/components";
import { RootState } from "@/state/store";
import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";

const Important = () => {
  const list = useSelector((state: RootState) => state.tasks.list);

  return (
    <>
      <Main list={list} heading={"Importants"} />
    </>
  );
};

export default Important;
