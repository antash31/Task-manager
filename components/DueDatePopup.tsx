import TodayIcon from "@mui/icons-material/Today";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const DueDatePopup = () => {
  return (
    <div className=" absolute right-0 flex flex-col text-white bg-black w-[90%] border-1 rounded-md border-[1px] p-1 z-10">
      <div className="flex px-2 hover:bg-blue-700 py-1 rounded-md">
        <TodayIcon />
        <p className="flex ml-1">Today</p>
        <p className="flex text-slate-500 ml-auto">Sat</p>
      </div>
      <div className="flex px-2 hover:bg-blue-700 py-1 rounded-md">
        <TodayIcon />
        <p className="flex ml-1">Tomorrow</p>
        <p className="flex text-slate-500 ml-auto">Sun</p>
      </div>
      <div className="flex px-2 hover:bg-blue-700 py-1 rounded-md border-b">
        <CalendarMonthIcon />
        <p className="flex ml-1">Next Week</p>
        <p className="flex text-slate-500 ml-auto"></p>
      </div>
      <div className="flex px-2 hover:bg-blue-700 py-1 rounded-md">
        <CalendarMonthIcon />
        <p className="flex ml-1">Pick a date</p>
        <p className="flex text-slate-500 ml-auto"></p>
      </div>
    </div>
  );
};

export default DueDatePopup;
