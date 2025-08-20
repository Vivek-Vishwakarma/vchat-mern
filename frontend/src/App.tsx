import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChatPage from "./pages/ChatPage";
import { Slide, ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";

let router = createBrowserRouter([
  {
    path: "/",
    Component: ProtectedRoute,
    children: [
      {
        path: "/chats",
        Component: ChatPage,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-gray-100">
        <RouterProvider router={router} />
        <ToastContainer theme="dark" transition={Slide} autoClose={2000} />
      </div>
    </>
  );
}

export default App;
