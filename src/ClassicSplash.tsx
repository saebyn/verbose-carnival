import stamp from "./assets/stamp.png";
import screens from "./Screens";

function ClassicSplash() {
  // get the screen name from the query string
  const screenName =
    (new URLSearchParams(window.location.search).get(
      "screen"
    ) as keyof typeof screens) || "initial";

  const screen = screens[screenName];

  return (
    <>
      <main className="screen">
        <div className="screen-overlay"></div>

        {screen}

        <img className="screen-stamp" src={stamp} alt="stamp" />
      </main>

      <div className="blob"></div>
      <div className="blur"></div>
    </>
  );
}

export default ClassicSplash;
