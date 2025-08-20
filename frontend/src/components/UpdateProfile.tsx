import { BiLoader, BiX } from "react-icons/bi";

const UpdateProfile = ({ handleClose }) => {
  const closeModal = () => {
    handleClose(true);
  };
  return (
    <div className="text-gray-100 border-2 border-gray-900 rounded-lg modal-popup dark:bg-gray-900">
      <div className="relative">
        <h1 className="text-center font-bold text-2xl py-2 mb-6 border-b-2">
          Profile
        </h1>
        <BiX onClick={closeModal} className="absolute cursor-pointer text-3xl top-1 right-4 font-bold"/>
      </div>
      <div className="space-y-12 py-6 flex justify-around gap-2 border-b-2">
        <div className="basis-40">
          <img
            className="mx-auto rounded-full h-30 w-30 object-cover"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="author avatar"
          />
        </div>
        <div className="space-y-2 text-left flex flex-col gap-4 basis-60">
          <div className="flex items-center space-x-2">
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100 mt-1"
            >
              Name :
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
                className="rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100 mt-1"
            >
              Email :
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Email"
                className="rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-sm">Joined At : 20 May 2023</p>
          </div>
        </div>
      </div>
      <div className="my-4">
        <button
          type="submit"
          className="flex w-full justify-center items-center rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 dark:hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          
        >
          <BiLoader className="mr-3 size-5 animate-spin" />
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
