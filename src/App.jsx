import "./App.css";
import "./grid.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import LoginOrSignUp from "./LoginOrSignUp";
import Navbar from "./Navbar";
import OurTeam from "./OurTeam";
import SearchEngine from "./SearchEngine";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const [cityInfo, setCityInfo] = useState({});
  const [cityLocationsList, setCityLocationsList] = useState({});
  const [locationDetails, setLocationDetails] = useState({});

  const [error, setError] = useState("");

  function handleError() {
    if (error) {
      const errorMsg = <p> {error} </p>;
      setError("");
      return errorMsg;
    }
  }

  function addCityData(city, data) {
    setCityInfo({
      ...cityInfo,
      [city]: data,
    });
  }

  function addCityLocationsListByType(city, type, data) {
    setCityLocationsList({
      ...cityLocationsList,
      [city + "-" + type]: data,
    });
  }

  function addLocationDetails(xid, data) {
    setLocationDetails({
      ...locationDetails,
      [xid]: data,
    });
  }

  return (
    <Router>
      <div className="app">
        <div className="status">{handleError()}</div>
        <Navbar isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <div className="user_info">
            <h4>Logged in as: {username}</h4>
          </div>
        ) : (
          <div className="user_info"></div>
        )}
        <Routes>
          <Route
            exact
            path="/"
            element={<Home isLoggedIn={isLoggedIn} />}
          ></Route>
          <Route
            exact
            path="/searchengine"
            element={
              <SearchEngine
                isLoggedIn={isLoggedIn}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                cityInfo={cityInfo}
                addCityData={addCityData}
                cityLocationsList={cityLocationsList}
                addCityLocationsListByType={addCityLocationsListByType}
                locationDetails={locationDetails}
                addLocationDetails={addLocationDetails}
                setError={setError}
              />
            }
          ></Route>
          <Route exact path="/about" element={<AboutUs />}></Route>
          <Route exact path="/our_services" element={<OurServices />}></Route>
          <Route exact path="/ourteam" element={<OurTeam />}></Route>
          <Route
            exact
            path="/login_or_signup"
            element={
              <LoginOrSignUp
                username={username}
                setUsername={setUsername}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setError={setError}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
