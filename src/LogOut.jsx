import { useNavigate } from "react-router-dom";

function LogOut({ setUsername, setPassword, setIsLoggedIn, setError }) {
  let navigate = useNavigate();
  const handleLogOut = (e) => {
    setUsername("");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="logout">
      <h1>Are you sure want to log out?</h1>
      <button type="submit" onClick={(e) => handleLogOut()}>
        Log Out!!
      </button>
    </div>
  );
}

export default LogOut;
