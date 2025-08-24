import Chats from "../components/Chats";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

const ChatPage = () => {
  return (
    <div>
      <NavBar />
      <div className="w-11/12 mx-auto p-4 bg-gray-800 rounded-lg flex gap-4">
        <div className="w-3/12 bg-gray-900 p-4 rounded">
          <Sidebar />
        </div>
        <div className="w-full bg-gray-900 p-4 rounded">
          <Chats />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
