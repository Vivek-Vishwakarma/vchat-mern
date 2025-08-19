import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChatPage from "./pages/ChatPage";
let router = createBrowserRouter([
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
]);
function App() {
  return (
    <>
      <div className="dark:bg-gray-800">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
