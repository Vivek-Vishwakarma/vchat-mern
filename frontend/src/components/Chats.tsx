import { BiPaperclip, BiSend } from "react-icons/bi";
import { useSelector } from "react-redux";

const Chats = () => {
  const { selectedUser } = useSelector((state: any) => state.chat);
  return (
    <div>
      <div className="w-full pb-3 border-b border-gray-600 flex items-center">
        <div className="relative w-10 h-10">
          <img
            src={selectedUser.profilePicture || "avatar.png"}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="h-2 w-2 rounded-full bg-green-500 absolute top-0 right-0"></span>
        </div>
        <span className="mx-4">{selectedUser.name}</span>
      </div>

      <div className="h-[69vh] overflow-y-auto"></div>

      <div className="flex gap-4 items-center mx-4">
        <div className="w-full">
          <input
            id="search"
            type="text"
            name="search"
            required
            placeholder="Enter message here ..."
            className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
        <div>
          <BiPaperclip className="text-2xl cursor-pointer" />
        </div>
        <div>
          <BiSend className="text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Chats;
