"use client";
import { TaskItemBar, Sidebar, InputBar, Heading } from "@/components";
import { MainProps } from "@/types";
import ItemSideBar from "./ItemSideBar";
import { useEffect, useRef, useState } from "react";

const Main = ({ list, heading }: MainProps) => {
  //References
  const backgroundRef = useRef<null | any>(null);
  const taskContainerRef = useRef<null | any>(null);
  const inputRef = useRef<null | any>(null);

  //Local states
  const [isRightSideBarOpen, setIsRightSideBarOpen] = useState(false);
  const [infoForRightSideBar, setInfoForRightSideBar] = useState({
    id: "",
    taskname: "",
  });

  function sendInfoToRightSideBar(id: string, taskname: string) {
    setInfoForRightSideBar({ id: id, taskname: taskname });
  }

  function handleCloseRightBar() {
    setIsRightSideBarOpen(false);
  }

  useEffect(() => {
    function handleClick(e: any) {
      if (
        taskContainerRef.current &&
        !taskContainerRef.current.contains(e.target) &&
        inputRef &&
        !inputRef.current.contains(e.target)
      ) {
        handleCloseRightBar();
      }
    }

    backgroundRef.current.addEventListener("click", handleClick);
  }, [isRightSideBarOpen]);

  return (
    <div>
      <div className="h-screen w-screen flex">
        <Sidebar />
        <div
          ref={backgroundRef}
          className="flex flex-col flex-grow bg-cover bg-center bg-no-repeat p-5"
          style={{ backgroundImage: `url('/Wallpaper6.jpeg')` }}
        >
          <Heading heading={heading} />
          <div
            ref={taskContainerRef}
            className="py-5 overflow-scroll h-auto taskItemBarContainer"
          >
            {list.map((item, index) => {
              return (
                <TaskItemBar
                  key={index}
                  title={item.taskname}
                  id={item.id}
                  IsRightSideBarOpen={isRightSideBarOpen}
                  setIsRightSideBarOpen={setIsRightSideBarOpen}
                  sendInfoToRightSideBar={sendInfoToRightSideBar}
                />
              );
            })}
          </div>
          <div ref={inputRef} className="mt-auto">
            <InputBar heading={heading} />
          </div>
        </div>
        {isRightSideBarOpen && (
          <ItemSideBar infoForRightSideBar={infoForRightSideBar} />
        )}
      </div>
    </div>
  );
};

export default Main;
