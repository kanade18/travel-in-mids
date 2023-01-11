function SearchBar({
  setIsToggle,
  selectedCity,
  setSelectedCity,
  selectedType,
  setSelectedType,
  setError,
}) {
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value.toLowerCase());
    setIsToggle(false);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value.toLowerCase());
    setIsToggle(false);
  };

  return (
    <>
      <div className="searchbar">
        <input value={selectedCity} onInput={handleCityChange} required />
        <select
          value={selectedType}
          name="type"
          onChange={handleTypeChange}
          required
        >
          <option value="">--Please select a Place--</option>
          <option value="gardens_and_parks">Gardens And Parks</option>
          <option value="natural">Natural</option>
          <option value="nightclubs">Night Clubs</option>
          <option value="amusement_parks">Amusement Parks</option>
          <option value="cultural">Cultural</option>
          <option value="sport">Sport</option>
          <option value="cinemas">Movie Theatres</option>
          <option value="accomodations">Accomodations</option>
        </select>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setIsToggle(true);
          }}
          disabled={!(selectedCity && selectedType)}
        >
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBar;
