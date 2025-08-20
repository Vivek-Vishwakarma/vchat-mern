import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { verifyUser } from "../store/actions/authActions";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyUser({})).then((res: any) => {
      if (res?.error?.message == "Rejected") {
        navigate("/login");
      } else {
        navigate("/chats");
      }
    });
  }, []);
  return <Outlet />;
};

export default ProtectedRoute;
