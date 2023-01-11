import { useState } from "react";
import SearchBar from "./SearchBar";
import CityInfo from "./CitiInfo";

function SearchEngine({
  isLoggedIn,
  selectedCity,
  setSelectedCity,
  selectedType,
  setSelectedType,
  cityInfo,
  addCityData,
  cityLocationsList,
  addCityLocationsListByType,
  locationDetails,
  addLocationDetails,
  setError,
}) {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <>
      {!isLoggedIn && (
        <div className="searchbar">
          <h2>
            You have been logged out. Please log in to use search engine!!
          </h2>
        </div>
      )}
      {isLoggedIn && (
        <SearchBar
          setIsToggle={setIsToggle}
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
      )}
      {isLoggedIn &&
        isToggle &&
        selectedCity.trim() !== "" &&
        selectedType.trim() !== "" && (
          <CityInfo
            selectedCity={selectedCity}
            selectedType={selectedType}
            cityInfo={cityInfo}
            addCityData={addCityData}
            cityLocationsList={cityLocationsList}
            addCityLocationsListByType={addCityLocationsListByType}
            locationDetails={locationDetails}
            addLocationDetails={addLocationDetails}
            setError={setError}
          />
        )}
    </>
  );
}

export default SearchEngine;
