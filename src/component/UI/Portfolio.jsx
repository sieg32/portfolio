import React, {useEffect,useState} from "react";
import data from "../../assets/data/portfolioData";

const Portfolio = () => {

  
  const [portfolios,setPortfolios] = useState(data);
  console.log(portfolios)



  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7b sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My Recent Projects
            </h3>
          </div>

         
        </div>

        <div id="portfolio-placeholder" className=" grid grid-cols-3 gap-10">
          {portfolios?.map((Portfolio, index) => (
            <div
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration ="1000"
              key={index} 
              className="group flex-col  items-center justify-evenly text-center p-4 max-w-full  bg-[#101A2D] rounded-xl sm:w-[99.5%] mb:w-[100%] lg:w-[100%] relative "
            >
              <h2 className="text-xl text-primaryColor py-4">
              {Portfolio.title}

              </h2>
              <figure>
                <img className="rounded-[10px] w-full  "  src={Portfolio.imgUrl} alt="" />
              </figure>
              <div className="w-full h-fit min-h-full  bg-black rounded-lg p-4 bg-opacity-90 absolute top-0 left-0 hidden cursor-pointer group-hover:flex items-center justify-center fade-in duration-200" onClick={()=>{window.open( Portfolio.siteUrl)}}>
                <p className="text-white w-full h-full   hover: bg-opacity-50  rounded-lg font-[500] overflow-y-hidden ">
                  
                    
                    {Portfolio.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">

           
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
