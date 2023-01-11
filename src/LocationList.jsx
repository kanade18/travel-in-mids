import { useState, useEffect } from "react";
import { fetchLocationList } from "./services";
import Accordian from "./Accordian";

function LocationList({
  cityInfo,
  selectedCity,
  selectedType,
  cityLocationsList,
  addCityLocationsListByType,
  locationDetails,
  addLocationDetails,
  setError,
}) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!cityLocationsList[selectedCity + "-" + selectedType]) {
      setIsLoading(true);
      fetchLocationList(cityInfo[selectedCity], selectedType)
        .then((result) => {
          addCityLocationsListByType(selectedCity, selectedType, result);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [
    cityInfo,
    selectedType,
    selectedCity,
    addCityLocationsListByType,
    cityLocationsList,
  ]);

  return (
    <>
      {isLoading && (
        <div className="city_info_attribute">
          <p>Loading location list</p>
        </div>
      )}
      {!isLoading && (
        <Accordian
          selectedCity={selectedCity}
          selectedType={selectedType}
          cityLocationsList={cityLocationsList}
          locationDetails={locationDetails}
          addLocationDetails={addLocationDetails}
          setError={setError}
        />
      )}
    </>
  );
}
export default LocationList;
