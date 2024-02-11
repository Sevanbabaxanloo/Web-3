import React from "react";

const style = {
  slogan_main_container: "border-b border-solid border-[var(--border-color)]",
  slogan_second_container:
    "mx-[7.5vw] border-x border-solid border-[var(--border-color)] max-lg:mx-[6vw] max-md:mx-[15px] max-xs:border-x-0",
  slogan_text:
    "pt-[96px] px-[21px] text-[55px] text-[var(--text-color)] flex flex-col justify-between max-md:pt-[45px]",
  slogan_text_container: "h-fit flex justify-center",
  slogan_text_content_div: "flex items-center",
  bold_text: "text-[var(--text-color)] font-[700]",
  slogan_small_text: "flex justify-between pt-[4vw] pb-[12px]",
  small_text_h1:
    "text-[var(--text-color)] text-[1.5vw] font-[100] font-neuehaasdisplay-roman font-sans",
  small_text_span: "text-[var(--main-text-color)] font-[100] mr-[8px]",
  slogan_text_content:
    "w-[42vw] text-[2.2vw] text-[var(--text-color-dark)] font-neuehaasdisplay-roman font-sans tracking-[-1px] max-lg:w-[41vw] max-md:w-[38.5vw] max-xs:tracking-[-0.2px] max-xs:w-[42vw]",
};

const Slogan = () => {
  return (
    <div className={style.slogan_main_container}>
      <div className={style.slogan_second_container}>
        <div className={style.slogan_text}>
          <div className={style.slogan_text_container}>
            <div className={style.slogan_text_content_div}>
              <p className={style.slogan_text_content}>
                Our mission is to help ensure the{" "}
                <span className={style.bold_text}> integrity </span> of the nft
                space continues to thrive by providing clients with a
                <span className={style.bold_text}>
                  {" "}
                  full suite of services{" "}
                </span>{" "}
                to assist them with the launch of their projects.
              </p>
            </div>
          </div>
          <div className={style.slogan_small_text}>
            <h1 className={style.small_text_h1}>
              <span className={style.small_text_span}>01.</span>SUPPORTIVE
            </h1>
            <h1 className={style.small_text_h1}>
              <span className={style.small_text_span}>02.</span>PROVEN
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
