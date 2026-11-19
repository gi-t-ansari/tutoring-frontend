import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";

const TaskList = ({ setOpenEditTask }) => {
  return (
    <section className="w-full p-2">
      <table className="w-full">
        <thead>
          <tr>
            <th align="left" className="p-2 bg-[#5925fa] text-white">
              Sl. No.
            </th>
            <th align="left" className="p-2 bg-[#5925fa] text-white">
              Title
            </th>
            <th align="left" className="p-2 bg-[#5925fa] text-white">
              Priority
            </th>
            <th align="left" className="p-2 bg-[#5925fa] text-white">
              Created Date
            </th>
            <th align="left" className="p-2 bg-[#5925fa] text-white">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" p-2  text-gray-800">1</td>
            <td className=" p-2  text-gray-800">Complete Project</td>
            <td className=" p-2  text-gray-800">Low</td>
            <td className=" p-2  text-gray-800">11-12-2026</td>
            <td className=" p-2  text-gray-800 flex gap-2">
              <button
                className="w-8 h-8 flex justify-center items-center rounded-md cursor-pointer border border-gray-400"
                onClick={() => setOpenEditTask(true)}
              >
                <MdOutlineEdit />
              </button>
              <button className="w-8 h-8 flex justify-center items-center rounded-md cursor-pointer border border-gray-400">
                <MdDeleteOutline />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TaskList;
