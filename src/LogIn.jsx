import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn({
  username,
  setUsername,
  setIsLoggedIn,
  setNeedSignUp,
  setError,
}) {
  let navigate = useNavigate();
  const [isPasswordEntered, setIsPasswordEntered] = useState(false);

  return (
    <form
      className="login-form"
      onSubmit={() => {
        setIsLoggedIn(true);
        navigate("/searchengine");
      }}
    >
      <div className="login-inputs">
        <label>
          <span>User name:</span>
          <input
            value={username}
            type="text"
            onInput={(e) => setUsername(e.target.value)}
            required
          />
          <span>Password:</span>
          <input
            type="password"
            onInput={(e) => {
              if (e.target.value.trim() !== "") {
                setIsPasswordEntered(true);
              } else {
                setIsPasswordEntered(false);
              }
            }}
            required
          />
        </label>
      </div>
      <div className="login-buttons">
        <button type="submit" disabled={username === "" || !isPasswordEntered}>
          Log In
        </button>
        <button type="button" onClick={() => setNeedSignUp(true)}>
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default LogIn;
