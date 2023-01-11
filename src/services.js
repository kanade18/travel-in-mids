const baseurl = "https://api.opentripmap.com/0.1/en/places/";
const apikey = "5ae2e3f221c38a28845f05b695a8692e36faf670ce2a90e05889183f";

export function fetchCityData(city) {
  const url = baseurl + "geoname?name=" + city + "&country=US&apikey=" + apikey;
  console.log("Fetching city data with url: " + url);
  return new Promise((resolve) => {
    // This inserts a 2 second delay so we can easily see a spinner at work
    setTimeout(resolve, 200);
  })
    .then(() => fetch(url, { method: "GET" }))
    .catch(() => Promise.reject("networkError"))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject("serviceError");
    });
}

export function fetchLocationList(location, kind) {
  const url =
    baseurl +
    "radius?radius=10000&format=json&lon=" +
    location.lon +
    "&lat=" +
    location.lat +
    "&kinds=" +
    kind +
    "&apikey=" +
    apikey;
  console.log("Fetching location list with url: " + url);
  return new Promise((resolve) => {
    setTimeout(resolve, 200);
  })
    .then(() => fetch(url, { method: "GET" }))
    .catch(() => Promise.reject("networkError"))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject("serviceError");
    });
}

export function fetchLocationDetails(xid) {
  const url = baseurl + "xid/" + xid + "?apikey=" + apikey;
  console.log("Fetching location details with url: " + url);
  return new Promise((resolve) => {
    setTimeout(resolve, 200);
  })
    .then(() => fetch(url, { method: "GET" }))
    .catch(() => Promise.reject("networkError"))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject("serviceError");
    });
}
