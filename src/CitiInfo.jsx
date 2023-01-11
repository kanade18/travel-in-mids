import { useState, useEffect } from "react";
import { fetchCityData } from "./services";
import LocationList from "./LocationList";

function CityInfo({
  selectedCity,
  selectedType,
  cityInfo,
  addCityData,
  cityLocationsList,
  addCityLocationsListByType,
  locationDetails,
  addLocationDetails,
  setError,
}) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!cityInfo[selectedCity]) {
      setIsLoading(true);
      fetchCityData(selectedCity)
        .then((result) => {
          addCityData(selectedCity, result);
        })
        .catch((error) => {
          console.log(error);
          setError("Error loading city information");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [selectedCity, addCityData, cityInfo, isLoading, setError]);

  function renderCityData(cityInfo, selectedCity) {
    if (!cityInfo[selectedCity]) return <p>No city data</p>;
    let cityData = cityInfo[selectedCity];
    return (
      <>
        {cityData.name != null && (
          <ul className="city_info_attribute">
            <li>name: {cityData.name}</li>
            <li>country: {cityData.country}</li>
            <li>population: {cityData.population}</li>
            <li>timezone: {cityData.timezone}</li>
          </ul>
        )}
        {
          <LocationList
            cityInfo={cityInfo}
            selectedCity={selectedCity}
            selectedType={selectedType}
            cityLocationsList={cityLocationsList}
            addCityLocationsListByType={addCityLocationsListByType}
            locationDetails={locationDetails}
            addLocationDetails={addLocationDetails}
            setError={setError}
          />
        }
      </>
    );
  }

  return (
    <>
      {isLoading && (
        <div className="city_info_attribute">
          <p>Loading city information</p>
        </div>
      )}
      {!isLoading && renderCityData(cityInfo, selectedCity)}
    </>
  );
}
export default CityInfo;
