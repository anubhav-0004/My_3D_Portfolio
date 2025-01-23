import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    framer,
    carrent,
    jobit,
    tripguide,
    threejs,
    anubhav,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "MERN Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 5",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "framer",
      icon: framer,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  
  
  const projects = [
  {
    name: "Sandesh: Chat App",
    description:
      "Sandesh is a feature-rich chat application designed for both users and admins. It offers personal and group chat functionalities, enabling seamless communication. Users can create and manage groups, share messages in real-time, and enjoy an intuitive interface for enhanced user experience.",
    iconBg: "#E6DEDD",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/anubhav-0004/ChatApp_frontend",
    live_link: "https://chat-app-frontend-anubhav-0004-projects.vercel.app/",
  },
  {
    name: "Shopping Web",
    description:
      "This is a modern shopping application built with React, Tailwind CSS, and Redux. It fetches all products dynamically from an API, allowing users to browse a wide range of items. The app features a robust cart system where users can effortlessly add products, manage their selections, and experience a smooth and responsive interface for an enjoyable shopping experience.",
    iconBg: "#E6DEDD",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "white-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      
    ],
    image: jobit,
    source_code_link: "https://github.com/anubhav-0004/Shop_App",
    live_link: "https://anubhav-shop-app.netlify.app/",
  },
  {
    name: "Tour Planner",
    description:
      "It is a frontend travel planning website built using React and Tailwind CSS. It helps users plan trips based on their budget by showcasing tailored travel options. Users can browse destinations, mark places as 'interested' or 'not interested' and add preferred locations to their wishlist. The total estimated cost for the selected destinations is calculated and displayed, making travel planning easy and intuitive.",
    iconBg: "#E6DEDD",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      // {
      //   name: "",
      //   color: "pink-text-gradient",
      // },
    ],
    image: tripguide,
    source_code_link: "https://github.com/anubhav-0004/Plan_a_tour",
    live_link: "https://anubhav-tourplanner.netlify.app/",
  },
  {
    name: "Currency Converter",
    description:
      "Currency Converter is a web application built using HTML, plain CSS, and JavaScript. It allows users to select two countries and convert currency from one to another. Users can input the amount for the first currency, and the app calculates the equivalent value in the second currency using real-time exchange rates fetched from an API. This tool provides a simple and efficient solution for currency conversion needs.",
    iconBg: "#E6DEDD",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/anubhav-0004/Currency-Converter",
    live_link: "https://anubhav-0004.github.io/Currency-Converter/",
  },
];

  
  export { services, technologies, projects, anubhav };