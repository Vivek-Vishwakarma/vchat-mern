import { BiCog, BiExit } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { logOutUser } from "../store/actions/authActions";
import { useNavigate } from "react-router";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import UpdateProfile from "./UpdateProfile";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await dispatch(logOutUser({}));
    navigate("/login");
  };

  const handleOpen = () => setOpen(true);
  const handleClose = (e, reason) => {
    if (reason && reason === "backdropClick") return;

    setOpen(false);
  };

  return (
    <>
      <nav className="mx-auto max-full px-12">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
                className="h-8 w-auto"
              />
              <span className="mx-2 font-bold">VCHAT</span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-current="page"
                  className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
                >
                  Home
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div
              className="flex gap-2 cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              onClick={handleOpen}
            >
              Profile <CgProfile className="text-2xl" />
            </div>
            <div className="flex gap-2 cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">
              Setting <BiCog className="text-2xl" />
            </div>
            <div
              className="flex gap-2 cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              onClick={handleLogout}
            >
              Logout <BiExit className="text-2xl" />
            </div>
          </div>
        </div>
      </nav>

      <Modal open={open} onClose={handleClose}>
        <UpdateProfile handleClose={handleClose} />
      </Modal>
    </>
  );
};

export default NavBar;
