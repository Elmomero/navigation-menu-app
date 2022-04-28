import { useState } from "react";
import { Logo } from "./components/Logo";
import { MenuButton } from "./components/MenuButton";
import { PageContent } from "./components/PageContent";
import { Menu } from "./components/Menu";

function App() {
  const [menuClosed, setMenuClosed] = useState(true);
  return (
    <div className={`app ${!menuClosed && 'filtered__background'}`}>
      <Logo />
      <MenuButton menuToggle={setMenuClosed} buttonState={menuClosed}/>
      <Menu isOpen={menuClosed}/>
      <main className="main">
        <figure className="image__hero__container">
          <img src="./images/image-hero-mobile.png" alt="image__hero" />
        </figure>
        <PageContent />
      </main>
    </div>
  );
}

export default App;
