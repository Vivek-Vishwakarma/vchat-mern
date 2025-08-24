import { useState } from "react";
import { BiEdit, BiLoader, BiX } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/actions/authActions";

const UpdateProfile = ({ handleClose }) => {
  const { userInfo, loading } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const closeModal = () => {
    handleClose(true);
  };
  const [form, setForm] = useState({
    email: userInfo.email,
    name: userInfo.name,
    profilePicture: userInfo.profilePicture,
  });
  const [image, setImage]: any = useState(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      // Create a preview for the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, profilePicture: reader.result }));
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const updateUserProfile = () => {
    dispatch(updateUser(form));
  };

  return (
    <div className="text-gray-100 border-2 border-gray-900 rounded-lg modal-popup dark:bg-gray-900">
      <div className="relative">
        <h1 className="text-center font-bold text-2xl py-2 mb-6 border-b-2">
          Profile
        </h1>
        <BiX
          onClick={closeModal}
          className="absolute cursor-pointer text-3xl top-1 right-4 font-bold"
        />
      </div>
      <div className="space-y-12 py-6 flex justify-around gap-2 border-b-2">
        <div className="basis-40">
          <div className="relative mx-auto h-40 w-40 ">
            <label htmlFor="profilePicture">
              <img
                className="rounded-full h-40 w-40 object-cover"
                src={
                  image ||
                  form.profilePicture ||
                  "avatar.png"
                }
                alt="author avatar"
              />
              <BiEdit className="absolute text-2xl right-0 bottom-2 text-indigo-50" />
            </label>
          </div>
          <input
            className="invisible"
            type="file"
            name="profilePicture"
            id="profilePicture"
            onChange={(e) => handleImageChange(e)}
          />
        </div>
        <div className="space-y-2 text-left flex flex-col gap-4 basis-60">
          <div className="items-center space-x-2">
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
                value={form.name}
                onChange={handleChange}
                className="rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="items-center space-x-3">
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
                value={form.email}
                disabled
                className="rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 cursor-not-allowed"
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
          disabled={loading}
          onClick={updateUserProfile}
        >
          {loading && <BiLoader className="mr-3 size-5 animate-spin" />}
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
