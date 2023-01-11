import testImage from "./banner.png";

function Home({ isLoggedIn }) {
  return (
    <>
      <div className="images">
        <img src={testImage} alt="logo" />
        {!isLoggedIn && (
          <p>LogIn / Register to know more about this Search Engine.</p>
        )}
        <p>Welcome to Travel.Explore.Experience</p>
        <p>
          Traveling ? Planning to Explore different Cities? Willing to
          Experience the unexpected ?
          <p>
            Then visit <b>Travel.Explore.Experience</b>
          </p>
          <p>
            To all the Travelers this search engine provides detailed
            information about places you can visit.
          </p>
        </p>
      </div>
    </>
  );
}

export default Home;
