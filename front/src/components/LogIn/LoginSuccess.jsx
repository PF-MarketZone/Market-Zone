import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LogInSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("entro al efecto");
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
