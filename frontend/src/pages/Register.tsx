import React, { useEffect, useState } from "react";
import {
  AiOutlineUserAdd,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/actions/authActions";
import { BiLoader } from "react-icons/bi";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, loading } = useSelector((state: any) => state.auth);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(form));
  };

  useEffect(() => {
    if (success) {
      navigate("/chats");
    }
  }, [success]);

  return (
    <>
      <div className="flex min-h-full flex-col justify-center mt-4 px-6 py-8 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <AiOutlineUserAdd className="text-6xl mx-auto text-indigo-600 dark:text-indigo-400" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Create your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
              >
                Full name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
              >
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 pr-10 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-2 text-xl flex items-center text-gray-500 dark:text-gray-300 cursor-pointer"
                >
                  {!showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center items-center rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 dark:hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading && <BiLoader className="mr-3 size-5 animate-spin" />}
                Create account
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Already a member ?{" "}
            <Link
              to={"/login"}
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
