import React, { useState } from "react";

const style = {
  header:
    "flex flex-col items-center pt-[1.2vw] bg-black bg-opacity-70 shadow-md backdrop-blur-[9.4px] sticky top-0 z-10 max-lg:pt-[12px] max-xs:pt-[10px] ",
  header__container: "w-full flex justify-between items-center",
  twitterIcon:
    "w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] max-xs:w-[20px] max-xs:h-[20px]",
  header__title:
    "text-[2.2vw] font-[100] flex text-[var(--text-color)] hover:text-[var(--main-text-color)] cursor-pointer max-lg:text-[2.5vw] max-xs:text-[4vw]",
  header__menu:
    "w-[40vw] h-[34px] flex items-center justify-between max-xs:hidden",
  header__title_R: "text-[1vw] ml-[3px] font-[100] max-xs:text-[6px]",
  header__logo: "flex items-center justify-start ml-[7.5vw] max-lg:ml-[20px]",
  menu_items:
    "decoration-0 text-[var(--text-color)] hover:text-[var(--main-text-color)] text-[1.2vw] font max-lg:text-[1.5vw]",
  twitterIcon_container: "flex justify-end",
  header__burger__icon:
    "flex items-center justify-end mr-[7.5vw] max-xs:w-[55px] max-xs:justify-between max-lg:mr-[20px]",
  hamberger_menu: "hidden max-xs:block",
  menu__burger_topline:
    "w-[30px] h-[2px] bg-[var(--main-text-color)] max-xs:w-[20px]",
  menu__burger_bottomline:
    "w-[30px] h-[2px] mt-[6px] bg-[var(--main-text-color)] max-xs:w-[20px] max-xs:mt-[6px]",
  bottom_line:
    "w-full h-[1px] bg-[var(--border-color)] mt-[17px] color-[var(--main-text-color)]  max-lg:mt-[12px] max-xs:mt-[5px]",
  menu__elements: "flex justify-center ",
};

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector(".mobilemenu");
    mobileMenu.style.display = "block";
  };

  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__logo}>
          <a href="/">
            <h1 className={style.header__title}>
              WEBTHREE
              <span className={style.header__title_R}>®</span>
            </h1>
          </a>
        </div>
        <div className={style.header__menu}>
          <div className={style.menu__elements}>
            <a href="/" className={style.menu_items}>
              HOME
            </a>
          </div>
          <div className={style.menu__elements}>
            <a href="#services" className={style.menu_items}>
              SERVICES
            </a>
          </div>
          <div className={style.menu__elements}>
            <a href="#partners" className={style.menu_items}>
              PARTNERS
            </a>
          </div>
          <div className={style.menu__elements}>
            <a href="#clients" className={style.menu_items}>
              CLIENTS
            </a>
          </div>
          <div className={style.menu__elements}>
            <a href="#contact" className={style.menu_items}>
              CONTACT
            </a>
          </div>
        </div>
        <div className={style.header__burger__icon}>
          <div className={style.hamberger_menu}>
            <a href="#" onClick={toggleMobileMenu}>
              <div className={style.menu__burger_topline}></div>
              <div className={style.menu__burger_bottomline}></div>
            </a>
          </div>
          <a
            href="https://twitter.com/Web3Auditing"
            className={style.twitterIcon_container}
          >
            <img
              className={style.twitterIcon}
              src="https://uploads-ssl.webflow.com/625416e0a64e0c6895f79107/626fcc6252006a9d0186c6c3_Twitter-icon.svg"
              alt="logo"
            />
          </a>
        </div>
      </div>
      <div className={style.bottom_line}></div>
    </header>
  );
};

export default Header;
