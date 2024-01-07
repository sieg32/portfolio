import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.png";

import portfolioImg04 from "../images/portfolio-04.jpg";


const portfolios = [
  {
    id: "01",
    imgUrl: "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
    category: "frontend",
    title: "e-commerce frontend",
    description:
      "a basic e-commerce frontend built using react and data fetched from dummyjson api.",
    technologies: ["React", "css", "Node.js", "axios"],
    siteUrl: "https://github.com/sieg32/project-bwi",
  },
  {
    id: "02",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png",
    category: "backend",
    title: " user authentication and basic user management",
    description:
      "Node.js backend built using the Express.js framework. It serves as the backend for a web application, It provides various api routes for user as well as admin access with different roles and permissions",
    technologies: ["React", "express", "Node.js", "MongoDB", "bcrypt", "jsonwebtoken", "multer"],
    siteUrl: "https://github.com/sieg32/nodejs-backend-bwi",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Ux",
    title: "react form-generator",
    description:
      "a form generator app where you can create sharable forms ",
    technologies: ["React", "expressjs", "Node.js", "MongoDB"],
    siteUrl: "https://github.com/sieg32/form-generator-react",
  },


  ];

export default portfolios;
