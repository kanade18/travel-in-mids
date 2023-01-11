import { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import LogOut from "./LogOut";

function LoginOrSignUp({
  username,
  setUsername,
  isLoggedIn,
  setIsLoggedIn,
  setError,
}) {
  const [needSignUp, setNeedSignUp] = useState(false);

  let signup_or_login_content = needSignUp ? (
    <SignUp
      username={username}
      setUsername={setUsername}
      setIsLoggedIn={setIsLoggedIn}
      setNeedSignUp={setNeedSignUp}
      setError={setError}
    />
  ) : (
    <LogIn
      usename={username}
      setUsername={setUsername}
      setIsLoggedIn={setIsLoggedIn}
      setNeedSignUp={setNeedSignUp}
      setError={setError}
    />
  );

  let content = isLoggedIn ? (
    <LogOut
      setUsername={setUsername}
      setIsLoggedIn={setIsLoggedIn}
      setError={setError}
    />
  ) : (
    signup_or_login_content
  );

  return <>{content}</>;
}
export default LoginOrSignUp;
