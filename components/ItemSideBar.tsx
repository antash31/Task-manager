import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import DueDatePopup from "./DueDatePopup";
import { useState } from "react";

const ItemSideBar = () => {
  const [file, setFile] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);
  function handleUpload(e: any) {
    setFile(Array.from(e.target.files));
    console.log(file);
  }
  return (
    <div className="relative h-screen w-[300px] bg-custom-black font-jersey-20 px-3">
      <div className="mt-5">
        <div className="flex items-center w-[100%] my-1 px-1">
          <input type="checkbox" name="" id="" />
          <label className="text-white ml-2 text-xl">TITLE</label>
          <StarBorderRoundedIcon className="text-white ml-auto" />
        </div>
        <div className="itemsidebarHelperClass">
          <AddRoundedIcon className="text-sub-blue mx-2" />
          <input
            type="text"
            placeholder="Next Step"
            className="bg-custom-black text-sub-blue focus:outline-none focus-none w-[100%]"
          />
        </div>
        <div className="itemsidebarHelperClass">
          <WbSunnyRoundedIcon className="text-sub-blue mx-2" />
          <p className="text-sub-blue">Added to my day</p>
        </div>
        <div className="itemsidebarHelperClass">
          <NotificationsRoundedIcon className="text-sub-blue mx-2" />
          <p className="text-sub-blue">Remind me</p>
        </div>
        <div className="itemsidebarHelperClass">
          <CalendarTodayRoundedIcon className="text-sub-blue mx-2" />
          <p className="text-sub-blue">Due Date</p>
        </div>
        <div className="itemsidebarHelperClass" onClick={handleUpload}>
          <AttachFileRoundedIcon className="text-sub-blue mx-2" />
          <input
            type="file"
            className="text-sub-blue"
            onChange={handleUpload}
            placeholder="Add a file"
            multiple
            id="upload"
          />
          <label htmlFor="upload">Add a file</label>
        </div>
        <div
          className="itemsidebarHelperClass"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <RepeatRoundedIcon className="text-sub-blue mx-2" />
          <p className="text-sub-blue">Repeat</p>
          {!openMenu && <DueDatePopup />}
        </div>

        <div className="itemsidebarHelperClass">
          <textarea
            placeholder="Add Note"
            className="mx-3 text-sub-blue bg-custom-black w-[100%] h-[100%] focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};
export default ItemSideBar;
