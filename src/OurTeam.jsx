import img from "./OurTeam.png";
function OurTeam() {
  return (
    <div className="teaminfo">
      <div className="team">
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
        <p>
          Volutpat ac tincidunt vitae semper quis. Eget nunc scelerisque viverra
          mauris in aliquam sem fringilla ut. Mauris commodo quis imperdiet
          massa tincidunt nunc pulvinar. Elit pellentesque habitant morbi
          tristique senectus et netus et. Lorem dolor sed viverra ipsum nunc
          aliquet bibendum. Sit amet luctus venenatis lectus. In ornare quam
          viverra orci sagittis eu volutpat odio facilisis. Purus in mollis nunc
          sed. Neque convallis a cras semper auctor neque vitae tempus quam.
          Lorem donec massa sapien faucibus et molestie. Arcu dictum varius duis
          at consectetur lorem donec. Morbi tempus iaculis urna id volutpat
          lacus laoreet. Massa massa ultricies mi quis hendrerit. Odio morbi
          quis commodo odio aenean sed adipiscing diam. Mattis molestie a
          iaculis at erat. Massa placerat duis ultricies lacus sed turpis
          tincidunt id.
        </p>
      </div>
      <div className="teamimg">
        <img src={img} alt="our team" />
      </div>
    </div>
  );
}

export default OurTeam;
