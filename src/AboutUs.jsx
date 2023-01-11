import testI from "./logo.GIF";

function AboutUs() {
  return (
    <div className="aboutinfo">
      <div className="about">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Adipiscing elit duis tristique
          sollicitudin nibh sit amet commodo nulla. Nunc sed velit dignissim
          sodales ut eu sem integer vitae. Interdum velit laoreet id donec.
          Convallis tellus id interdum velit laoreet id donec ultrices. Sodales
          ut etiam sit amet nisl purus. Gravida arcu ac tortor dignissim.
          Iaculis urna id volutpat lacus. Quis imperdiet massa tincidunt nunc
          pulvinar. Vitae sapien pellentesque habitant morbi tristique senectus
          et netus. Enim lobortis scelerisque fermentum dui faucibus in.
        </p>
      </div>
      <div className="aboutimg">
        <img src={testI} alt="Travel Explore Experience" />
      </div>
    </div>
  );
}

export default AboutUs;
