import React, { useState, useEffect } from "react";
import Header from "./Component/Header/Header";
import Wellcomebanner from "./Component/Wellcomebanner/wellcome";
import Slogan from "./Component/Workslogan/Slogan";
import Services from "./Component/Services/Services";
import Partners from "./Component/Partners/Partners";
import Client from "./Component/Client/Client";
import Team from "./Component/Team/Team";
import GetStarted from "./Component/GetStarted/GetStarted";
import Footer from "./Component/Footer/Footer";
import Mobilemenu from "./Component/Mobilemenu/Mobilemenu";
import WellcomeAnimation from "./Component/WellcomeAnimation/WellcomeAnimation";

function App() {
  const [displayMainDiv, setDisplayMainDiv] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayMainDiv(false);
    }, 2700);

    return () => clearTimeout(timeout);
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      {displayMainDiv ? (
        <WellcomeAnimation />
      ) : (
        <div>
          <Header />
          <Mobilemenu />
          <Wellcomebanner />
          <Slogan />
          <Services />
          <Partners />
          <Client />
          <Team />
          <GetStarted />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
