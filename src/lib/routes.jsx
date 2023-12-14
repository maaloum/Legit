import { useState, useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../index";
const ROOT = "/";
const ProtectRoute = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return null;
  }

  if (!user.role) {
    navigate("/login");
    return null;
  }

  return <>{children}</>;
};

export const router = createBrowserRouter([{ path: ROOT, element: <Home /> }]);
