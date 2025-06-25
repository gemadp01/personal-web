export interface Project {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

export const dataDummy: Project[] = [
  {
    image: "/your-image-path.jpg",
    category: "Fullstack",
    title: "My Tayu Web App",
    description:
      "Developed a web application to manage final project (TA) activities, including registration validation, data import, supervisor assignment, and graduation (yudisium) information display, using Laravel 8.",
    link: "https://github.com/gemadp01/mytayu-app",
  },

  {
    image: "/your-image-path.jpg",
    category: "Fullstack",
    title: "Simple E-Commerce",
    description: "Simple Project E-Commerce with Laravel 9 and Bootstrap 5.",
    link: "https://github.com/gemadp01/laravel9-simple-ecommerce",
  },
  {
    image: "/your-image-path.jpg",
    category: "Frontend",
    title: "FastCampus Commerce",
    description:
      "Built a real-case project featuring product search, shopping cart, checkout, and admin page using React and Redux.",
    link: "https://github.com/gemadp01/react-redux",
  },
  {
    image: "/your-image-path.jpg",
    category: "Frontend",
    title: "Simple todoapp",
    description:
      "Built a simple todo app with CRUD and search features using json-server, styled with Tailwind CSS and DaisyUI, developed in Nextjs 13.",
    link: "https://github.com/gemadp01/simple-todoapp",
  },
  {
    image: "/your-image-path.jpg",
    category: "Frontend",
    title: "Apple ID Landing Page",
    description: "Clone Apple ID with HTML, CSS, Javascript.",
    link: "https://github.com/gemadp01/apple-id",
  },
  // {
  //   image: "/your-image-path.jpg",
  //   subtitle: "Frontend",
  //   title: "Agency Landing Page",
  //   description: "Design to Code Agency Landing Page with HTML CSS Javascript",
  //   link: "https://github.com/gemadp01/agency-landing-page",
  // },

  {
    image: "/your-image-path.jpg",
    category: "Backend",
    title: "Simple Todolist",
    description: "Simple Project Todolist with php",
    link: "https://github.com/gemadp01/usjwp-todolist",
  },
  {
    image: "/your-image-path.jpg",
    category: "UI UX",
    title: "My Tayu Design System",
    description: "My Tayu Design System with Figma",
    link: "https://www.figma.com/design/EdA9EdmO8bLSiVubG9dLmS/Wireframe-TAYU?node-id=0-1&t=ltXPbBK2adhUqTmH-1",
  },
  {
    image: "/your-image-path.jpg",
    category: "UI UX",
    title: "Personal Web Design System",
    description: "Personal Web Design System with Figma",
    link: "https://www.figma.com/design/49wpoz7gtVv3PvbLH8yowo/Personal-Website?node-id=234-61&t=VASS8SKuOqw0906o-1",
  },
];
