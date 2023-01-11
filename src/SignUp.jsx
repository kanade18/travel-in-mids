import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({
  username,
  setUsername,
  setIsLoggedIn,
  setNeedSignUp,
  setError,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isPasswordEntered, setIsPasswordEntered] = useState(false);
  let navigate = useNavigate();

  return (
    <>
      <form
        className="signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          setIsLoggedIn(true);
          setNeedSignUp(false);
          navigate("/searchengine");
        }}
      >
        <div className="title">
          <h5>Sign Up Form</h5>
        </div>
        <div className="first-name">
          <label>
            * First Name :
            <input
              name="firstName"
              type="text"
              className="form--validate"
              onInput={(e) => {
                if (e.target.value.trim() !== "") {
                  setFirstName(e.target.value);
                }
              }}
              required
            />
          </label>
        </div>
        <div className="last-name">
          <label>
            *Last Name :
            <input
              name="lastName"
              type="text"
              className="form--validate"
              onInput={(e) => {
                if (e.target.value.trim() !== "") {
                  setLastName(e.target.value);
                }
              }}
              required
            />
          </label>
        </div>
        <div className="email">
          <label htmlFor="email">* Enter Your Email </label>
          <input
            type="email"
            className="form--validate"
            onInput={(e) => {
              if (e.target.value.trim() !== "") {
                setUsername(e.target.value);
              }
            }}
            name="email"
            required
          />
        </div>
        <div className="password">
          <label htmlFor="password">* Enter Your Password </label>
          <input
            type="password"
            className="form--validate"
            onInput={(e) => {
              if (e.target.value.trim() !== "") {
                setIsPasswordEntered(true);
              } else {
                setIsPasswordEntered(false);
              }
            }}
            name="password"
            required
          />
        </div>
        <div className="signup-button">
          <button
            type="submit"
            className="button"
            disabled={
              username === "" ||
              firstName === "" ||
              lastName === "" ||
              !isPasswordEntered
            }
          >
            SignUp / Register
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUp;
