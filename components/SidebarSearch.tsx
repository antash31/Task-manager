import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SidebarSearch = () => {
  return (
    <div className="relative my-2 min-w-[200px]">
      <SearchRoundedIcon fontSize="small" className="absolute mx-1" />
      <input
        type="text"
        placeholder="Search"
        className="px-1 pl-8 bg-sub-black rounded-md shadow-sm shadow-slate-50"
      />
    </div>
  );
};

export default SidebarSearch;
