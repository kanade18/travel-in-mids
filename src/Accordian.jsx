import { useState } from "react";
import LocationDetails from "./LocationDetails";

function Accordion({
  selectedCity,
  selectedType,
  cityLocationsList,
  locationDetails,
  addLocationDetails,
  setError,
}) {
  const [isEntryOpen, setIsEntryOpen] = useState({});

  function toggleEntry(idx) {
    setIsEntryOpen({
      ...isEntryOpen,
      [idx]: !isEntryOpen[idx],
    });
  }

  function displayHtml(data, idx) {
    return (
      <div
        key={data.xid}
        className={`accordion__entry ${
          isEntryOpen[idx] ? "accordion__entry--open" : ""
        }`}
      >
        <button
          className="accordion__title"
          onClick={(e) => {
            e.preventDefault();
            toggleEntry(idx);
          }}
        >
          {data.name}
        </button>
        <div className="accordion__body">
          {isEntryOpen[idx] && (
            <LocationDetails
              xid={data.xid}
              locationDetails={locationDetails}
              addLocationDetails={addLocationDetails}
              setError={setError}
            />
          )}
        </div>
      </div>
    );
  }

  let content;
  if (
    cityLocationsList &&
    cityLocationsList[selectedCity + "-" + selectedType]
  ) {
    content = (
      <div className="city_details accordion">
        {cityLocationsList &&
          cityLocationsList[selectedCity + "-" + selectedType] &&
          cityLocationsList[selectedCity + "-" + selectedType]
            .filter((data) => data.name !== "")
            .map((data, idx) => displayHtml(data, idx))}
      </div>
    );
  } else {
    content = (
      <div className="city_info_attribute">
        <p>No info available</p>
      </div>
    );
  }

  return <>{content}</>;
}

export default Accordion;
