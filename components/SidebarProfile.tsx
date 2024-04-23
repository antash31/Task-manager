import React from "react";

const SidebarProfile = () => {
  return (
    <div className="flex justify-center items-center mb-2">
      <p className="flex justify-center items-center h-[30px] w-[30px] mr-1 bg-yellow-500 rounded-[100%] ">
        AS
      </p>
      <div>
        <p className="text-sm">Antash Shrivastava</p>
        <p className="text-sub-blue text-xs">antashshrivastava@gmail.com</p>
      </div>
    </div>
  );
};

export default SidebarProfile;
