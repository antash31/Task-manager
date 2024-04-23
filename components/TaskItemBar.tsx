import { removeTask } from "@/state/TaskSlice/TaskSlice";
import { RootState } from "@/state/store";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";

const TaskItemBar = ({ title, id }: { title: string; id: string }) => {
  const list = useSelector((state: RootState) => state.tasks.list);
  const dispatch = useDispatch();
  function handleDelete(idc:string) {
    console.log(idc);
    return dispatch(removeTask({id:idc}));
  }
  return (
    <div className="flex h-[50px] w-[100%] bg-custom-black rounded-md text-white  mt-2">
      <div className="flex items-center w-[100%] justify-start border-1 p-0">
        <input
          type="checkbox"
          id="Tasks"
          name="Tasks"
          className="rounded-full border-3 w-5 h-5 ml-1"
        />
        <div className="flex flex-col w-[100%]">
          <label htmlFor="Tasks" className="mx-8 font-jersey-20 text-lg">
            {title}
          </label>
          <div className="flex text-xs p-0 justify-start mx-8">
            <p className="mr-3">Hello</p>
            <p className="mr-3">Steps</p>
            <p className="mr-3">Date</p>
            <p className="mr-3">Reminder</p>
            <p className="mr-3">Notes</p>
          </div>
        </div>
        <DeleteIcon onClick={()=>handleDelete(id)} />
      </div>
    </div>
  );
};

export default TaskItemBar;
