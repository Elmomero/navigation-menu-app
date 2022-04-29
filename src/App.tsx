import { useEffect, useState } from "react";
import { Logo } from "./components/Logo";
import { MenuButton } from "./components/MenuButton";
import { PageContent } from "./components/PageContent";
import { Menu } from "./components/Menu";
import { useScreenWidth } from "./hooks/useScreenWidth";

function App() {
  const [menuClosed, setMenuClosed] = useState(true);
  const screenWidth = useScreenWidth();
  useEffect(() => {
    if (screenWidth >= 620) {
      setMenuClosed(false);
    }
  }, [screenWidth]);

  return (
    <div className="app">
      <Logo />
      {screenWidth < 620 && (
        <MenuButton menuToggle={setMenuClosed} buttonState={menuClosed} />
      )}

      <div
        className={`black__filter ${!menuClosed ? "black__filter__on" : ""} ${
          screenWidth >= 620 ? "display__none" : ""
        }`}
        onClick={() => setMenuClosed(true)}
      ></div>
      <Menu isClosed={menuClosed} />
      <main className="main">
        <figure className="image__hero__container">
          <img
            src={`${
              screenWidth < 1024
                ? "./images/image-hero-mobile.png"
                : "./images/image-hero-desktop.png"
            }`}
            alt="image__hero"
          />
        </figure>
        <PageContent />
      </main>
    </div>
  );
}

export default App;
