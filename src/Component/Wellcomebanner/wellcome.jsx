import React from "react";
import eye from "../../img/eye.mp4";

const styles = {
  container: "w-full",
  wellcome_text_container:
    "relative bottom-0 h-fit px-[21px] mx-[7.5vw] border-l-[1px] border-r-[1px] border-[var(--border-color)] max-lg:mx-[6vw] max-md:mx-[15px] max-xs:mx-0 max-xs:border-0",
  wellcome_container: "relative h-fit",
  wellcome_text:
    "h-[22vw] pt-[10px] text-[var(--text-color)] text-[11vw] leading-[10vw] cursor-default font-[100] relative max-lg:text-[12vw] max-lg:leading-[11vw] max-lg:h-[34.5vw] max-md:text-[13vw] max-md:leading-[13vw] max-md:h-[42vw] max-md:tracking-[5px] max-xs:pt-[5px]",
  animated_nft:
    "text-[11vw] font-[100] text-[var(--main-text-color)] max-lg:text-[12vw] max-md:text-[13vw]",
  eye_animation:
    "w-[21vw] absolute top-[27px] right-[5vw] max-lg:right-[10px] max-lg:top-[38%] max-md:top-[67%] max-md:right-[3vw] max-md:w-[30vw] max-sm:top-[69%]",
  web_short_lines: "border-b-[1px] border-t-[1px] border-[var(--border-color)]",
  web_short_info_container:
    "mx-[7.5vw] mb-[16px] flex align-center justify-between pt-[16px] h-[5vw]",
  web_short_container: "flex align-center items-center font",
  animated_glob: "w-[2.5vw] h-[2.5vw] bg-[url(./img/glob.svg)] bg-cover",
  web_short_h1:
    "text-[1.2vw] font-[100] text-[var(--text-color)] ml-[10px] font",
  web_short_spancolor: "text-[var(--main-text-color)] mr-[5px]",
  text_cont: 'flex align-center items-center font',
};
const Wellcomebanner = () => {
  return (
    <div className={styles.container} id="/">
      <div className={styles.wellcome_text_container}>
        <div className={styles.wellcome_container}>
          <h1 className={styles.wellcome_text}>
            WE HELP <span className={styles.animated_nft}>NFT</span>
            <video
              src={eye}
              autoPlay
              muted
              className={styles.eye_animation}
            ></video>
            <br />
            PROJECTS LAUNCH.
          </h1>
        </div>
      </div>
      <div className={styles.web_short_lines}>
        <div className={styles.web_short_info_container}>
          <div className={styles.web_short_container}>
            <div className={styles.animated_glob}></div>
            <h1 className={styles.web_short_h1}>
              <span className={styles.web_short_spancolor}>/</span>
              BASED IN UNITED STATES &
              <br />
              WORKING WORLDWIDE
            </h1>
          </div>
          <div className={styles.text_cont}>
            <h1 className={styles.web_short_h1}>
              <span className={styles.web_short_spancolor}>/</span>
              YEARS OF BLOCK
              <br />
              CHAIN EXPERIENCE
            </h1>
          </div>
          <div className={styles.text_cont}>
            <h1 className={styles.web_short_h1}>
              <span className={styles.web_short_spancolor}>/</span>
              ©2022 WEBTHREE
              <br />
              ALL RIGHTS RESERVED
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wellcomebanner;
