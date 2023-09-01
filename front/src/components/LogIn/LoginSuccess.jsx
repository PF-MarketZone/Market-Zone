import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const LogInSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [navigate, isAuthenticated]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const user = searchParams.get("session");
    console.log(user);

    if (user) {
      sessionStorage.setItem("session-mz", user);
      navigate("/home");
    }
  }, []);

  return (
    <div>
      <p>Procesando...</p>
    </div>
  );
};

export default LogInSuccess;
