import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import DueDatePopup from "./DueDatePopup";

const ItemSidebarHelper = () => {
  const localIcons = [
    <AddRoundedIcon />,
    <WbSunnyRoundedIcon />,
    <NotificationsRoundedIcon />,
    <CalendarTodayRoundedIcon />,
    <RepeatRoundedIcon />,
    <AttachFileRoundedIcon />,
  ];

  return (
    <div className="bg-custom-black w-[100%] flex items-center py-2 my-1 font-jersey-20 border-b border-sub-blue text-xs">
      <AddRoundedIcon className="text-sub-blue mx-2" />
      <input
        type="text"
        placeholder="Next Step"
        className="bg-custom-black text-sub-blue focus:outline-none focus-none w-[100%]"
      />
    </div>
  );
};

export default ItemSidebarHelper;
