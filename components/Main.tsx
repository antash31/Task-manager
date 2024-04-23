import { TaskItemBar, Sidebar, InputBar, Heading } from "@/components";
import { MainProps } from "@/types";
import ItemSideBar from "./ItemSideBar";

const Main = ({ list, heading }: MainProps) => {
  return (
    <div>
      <div className="h-screen w-screen flex">
        <Sidebar />
        <div
          className="flex flex-col flex-grow bg-cover bg-center bg-no-repeat p-5"
          style={{ backgroundImage: `url('/Wallpaper6.jpeg')` }}
        >
          <Heading heading={heading} />
          <div className="py-5 overflow-scroll h-[80%] taskItemBarContainer">
            {list.map((item, index) => {
              return (
                <TaskItemBar key={index} title={item.taskname} id={item.id} />
              );
            })}
          </div>
          <div className="mt-auto">
            <InputBar heading={heading} />
          </div>
        </div>
        <ItemSideBar />
      </div>
    </div>
  );
};

export default Main;
