"use client";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import SidebarItem from "./SidebarItem";
import { titles } from "@/constants";
import SidebarProfile from "./SidebarProfile";
import SidebarSearch from "./SidebarSearch";
import { useEffect, useRef, useState } from "react";

const Sidebar = () => {
  //Code for being able to drag the size.

  // const sideBarRef = useRef<any | null>(null);
  // const [startPositionX, setStartPositionX] = useState(0);
  // const [isChangingSize, setIsChangingSize] = useState(false);

  const [sidebarWidth, setSidebarWidth] = useState(200); // Initial width of the sidebar
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(0);
  const handleMouseDown = (e: any) => {
    setIsResizing(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: any) => {
    if (!isResizing) return;
    const width = sidebarWidth + (e.clientX - startX);
    setSidebarWidth(width);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };
  // useEffect(() => {
  //   //The element.
  //   const sidebar = sideBarRef.current;

  //   //Mouse Down
  //   if (sidebar) {
  //     sidebar.addEventListener("mousedown", (e: any) => {
  //       setIsChangingSize(true);
  //       setStartPositionX(e.clientX);
  //       console.log(":MouseDown");
  //     });
  //   }

  //   //Mouse Move
  //   sidebar.addEventListener("mousemove", (e: any) => {
  //     if (isChangingSize != true) {
  //       return;
  //     }
  //     const width = sidebar.offsetWidth + +(e.clientX - startPositionX);

  //     sidebar.style.width = `${width}px`;
  //     setStartPositionX(e.clientX);
  //     console.log(":Mouse Move");
  //   });
  //   //Mouse Up
  //   sidebar.addEventListener("mouseup", (e: any) => {
  //     setIsChangingSize(false);
  //     console.log(":Mouse up");
  //   });
  // }, []);

  const icons = [
    <WbSunnyRoundedIcon fontSize="small" className="text-sub-blue" />,
    <StarBorderIcon fontSize="small" className="text-[#e37b72]" />,
    <DateRangeRoundedIcon fontSize="small" className="text-sub-blue" />,
    <Person2RoundedIcon fontSize="small" className="text-sub-blue" />,
    <AssignmentRoundedIcon fontSize="small" className="text-sub-blue" />,
  ];
  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ width: sidebarWidth }}
      className="h-screen max-w-[70%] min-w-[250px] bg-custom-black text-white text-sm  border-r-2 border-black font-jersey-20"
    >
      <div className="flex flex-col justify-center items-start mt-9 px-2">
        <SidebarProfile />
        <SidebarSearch />
        <div className="my-2 w-[100%]">
          {titles.map((item, index) => {
            return <SidebarItem key={index} title={item} icon={icons[index]} />;
          })}
        </div>
      </div>
      <div
        className="hover:cursor-e-resize w-[5px] h-screen bg-green ml-auto"
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default Sidebar;
