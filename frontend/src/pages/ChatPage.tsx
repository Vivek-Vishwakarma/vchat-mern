import { Link } from "react-router";
import NavBar from "../components/NavBar";

const ChatPage = () => {
  return (
    <div>
      <NavBar />
      <h1 className="text-3xl font-bold text-center mt-10 dark:text-gray-100">
        <Link to={"/login"}>Chat Page</Link>
      </h1>
    </div>
  );
};

export default ChatPage;
