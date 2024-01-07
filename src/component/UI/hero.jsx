import React from "react";
// import heroimg from "../../assets/images/DSC_2585.jpg";
// import heroimg from "../../assets/images/hero.svg";
import CountUp from "react-countup";

const hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex item-center justify-between sm:flex-col md:flex-row">
          {/*=========hero left content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
               Wellcome !!
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Yogesh malviya,<br />A MERN Developer, <br /> 
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex item-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300
                py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-mail-line"></i>Hire Me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor flex items-center font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                see Portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex
               text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span className="flex px-2">
                <i class="ri-apps-2-line"></i>
              </span>
              "Striving to excel in a dynamic professional environment,
              leveraging my skills and experience to contribute value and
              innovation while continuously expanding my knowledge and
              expertise."
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow Me
              </span>
              <span>
                <a
                  href="yogeshmalviya554@gmail.com"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-mail-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/sieg32"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="www.linkedin.com/in/yogesh-malviya-ab7928269"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#instagram"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-instagram-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/*=========hero left end */}
          {/*============hero img========== */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              {/* <img className="rounded-full" src={heroimg} alt="" /> */}
            </figure>
          </div>
          {/*============hero end========== */}
          {/*============hero content right========== */}
          <div
            className="md:basis-1/5 flex justify-between relative text-center mt-10 felx-wrap gap-2 md:mt-0
          md:flex-col md:justify-end md:text-end"
          >
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[34px] ">
                <CountUp start={0} end={1} duration={5} suffix="+ years" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px] ">
                A Mern Stack Developer
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[34px] ">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px] ">
                Success Rate
              </h4>
            </div>
            {/* <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[34px] ">
                <CountUp start={0} end={150} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px] ">
                Happy Clients
              </h4>
            </div> */}
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[34px] ">
                <CountUp start={0} end={7} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px] ">
                Project Complete
              </h4>
            </div>
          </div>
          {/*============hero right end========== */}
        </div>
      </div>
    </section>
  );
};

export default hero;
