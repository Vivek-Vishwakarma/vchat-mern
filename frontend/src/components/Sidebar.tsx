import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions/chatActions";
import { setSelectedUser } from "../store/slice/chatSlice";
const Sidebar = () => {
  const dispatch = useDispatch();
  const { users, selectedUser } = useSelector((state: any) => state.chat);
  useEffect(() => {
    dispatch(getUsers({}));
  }, []);
  const selectUser = (user: any) => {
    dispatch(setSelectedUser(user));
  };
  return (
    <div>
      <div>
        <input
          id="search"
          type="text"
          name="search"
          required
          placeholder="Search ..."
          className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
      <div>
        {users &&
          users.map((user: any) => (
            <div
              onClick={() => selectUser(user)}
              key={user._id}
              className={`flex items-center gap-3 my-3 p-2 hover:bg-gray-800 rounded cursor-pointer ${
                selectedUser._id === user._id ? "bg-gray-800" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={user.profilePicture || "avatar.png"}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="h-2 w-2 rounded-full bg-green-500 absolute top-0 right-0"></span>
              </div>
              <span className="text-white">{user.name}</span>
            </div>
          ))}
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
