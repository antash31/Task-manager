import { SidebarItemProps } from "@/types";
import Link from "next/link";

const SidebarItem = ({ title, icon }: SidebarItemProps) => {
  const link = title.split(" ").join("");
  return (
    <div className="w-[100%]">
      <Link href={`${link}`} className="flex items-center p-1">
        {icon}
        <p className="mx-2">{title}</p>
        <p className="ml-auto mx-1 self-end">0</p>
      </Link>
    </div>
  );
};

export default SidebarItem;
