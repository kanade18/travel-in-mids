import { useState, useEffect } from "react";
import { fetchLocationDetails } from "./services";

function LocationDetails({
  xid,
  locationDetails,
  addLocationDetails,
  setError,
}) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!locationDetails[xid]) {
      setIsLoading(true);
      fetchLocationDetails(xid)
        .then((result) => {
          addLocationDetails(xid, result);
        })
        .catch((error) => {
          console.log(error);
          setError("Error loading location details");
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [xid, addLocationDetails, locationDetails, setError, isLoading]);

  function renderLocationDetails(details) {
    if (!details) return <p>Nothing to show</p>;
    let wikidata_link = "https://www.wikidata.org/wiki/" + details.wikidata;
    let google_maps_link =
      "https://www.google.com/maps/@" +
      details.point.lat +
      "," +
      details.point.lon +
      ",16z";
    return (
      <div className="location_attributes">
        {details.preview && details.preview.source && (
          <div className="location_image">
            <img src={details.preview.source} alt={details.name} />
          </div>
        )}

        {details.wikipedia_extracts && details.wikipedia_extracts.text && (
          <div className="location_wiki_extract">
            <p>{details.wikipedia_extracts.text}</p>
          </div>
        )}

        {details.url && (
          <div className="location_official_link">
            <a href={details.url} target="_blank" rel="noreferrer">
              Official Website
            </a>
          </div>
        )}

        {details.wikidata && (
          <div className="location_wikidata_link">
            <a href={wikidata_link} target="_blank" rel="noreferrer">
              Wikidata
            </a>
          </div>
        )}

        {details.point && details.point.lat && details.point.lon && (
          <div className="location_maps_link">
            <a href={google_maps_link} target="_blank" rel="noreferrer">
              Google Maps
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="locations">
      {isLoading && <p>Loading</p>}
      {!isLoading && (
        <div className="location_details">
          {locationDetails[xid]
            ? renderLocationDetails(locationDetails[xid])
            : ""}
        </div>
      )}
    </div>
  );
}
export default LocationDetails;
