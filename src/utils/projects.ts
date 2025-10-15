export interface Project {
  image?: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

export const dataDummy: Project[] = [
  {
    image: "project-images/mytayu-app.png",
    category: "Fullstack",
    title: "My Tayu Web App",
    description:
      "Developed a web application to manage final project (TA) activities, including registration validation, data import, supervisor assignment, and graduation (yudisium) information display, using Laravel 8.",
    link: "https://github.com/gemadp01/mytayu-app",
  },
  {
    image: "project-images/laravel9-simple-ecommerce.png",
    category: "Fullstack",
    title: "Simple E-Commerce",
    description: "Simple Project E-Commerce with Laravel 9 and Bootstrap 5.",
    link: "https://github.com/gemadp01/laravel9-simple-ecommerce",
  },
  {
    image: "project-images/brinvoice.png",
    category: "Fullstack",
    title: "Brinvoice",
    description:
      "A Laravel 11-based web application that enables users to easily create and manage invoices.",
    link: "https://github.com/gemadp01/brinvoice",
  },
  {
    image: "project-images/catalog-store.png",
    category: "Frontend",
    title: "Catalog Store",
    description:
      "A web application that helps store owners showcase products to customers and allows users to mark products they’re interested in.",
    link: "https://github.com/gemadp01/laravel9-simple-ecommerce",
  },
  {
    image: "project-images/cafe-finder.png",
    category: "Frontend",
    title: "Cafe Finder",
    description:
      "A web application that makes it easier for customers to find cafés while also helping café owners manage table availability and products.",
    link: "https://github.com/gemadp01/frontend-cafe-bbpvp",
  },
  {
    image: "project-images/quran-web.png",
    category: "Frontend",
    title: "Al-Quran Web App",
    description:
      "Developed a Quran web app with search, bookmark, audio features, and more using React through AI-assisted development.",
    link: "https://github.com/gemadp01/al-quran-web-app",
  },
  {
    image: "project-images/fastcampus-commerce.png",
    category: "Frontend",
    title: "FastCampus Commerce",
    description:
      "Built a real-case project featuring product search, shopping cart, checkout, and admin page using React and Redux.",
    link: "https://github.com/gemadp01/react-redux",
  },
  {
    image: "project-images/todolist.png",
    category: "Frontend",
    title: "Simple todoapp",
    description:
      "Built a simple todo app with CRUD and search features using json-server, styled with Tailwind CSS and DaisyUI, developed in Nextjs 13.",
    link: "https://github.com/gemadp01/simple-todoapp",
  },
  {
    image: "project-images/apple-id.png",
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

  // {
  //   image: "/your-image-path.jpg",
  //   category: "Backend",
  //   title: "Simple Todolist",
  //   description: "Simple Project Todolist with php",
  //   link: "https://github.com/gemadp01/usjwp-todolist",
  // },
  {
    // image: "/your-image-path.jpg",
    category: "Backend",
    title: "Catalog Store API",
    description:
      "Simple REST API for Catalog Store with Express.js and MongoDB",
    link: "https://github.com/gemadp01/ojt-netkrom-backend",
  },
  {
    // image: "/your-image-path.jpg",
    category: "Backend",
    title: "Cafe Finder API",
    description: "Simple REST API for Cafe Finder with Express.js and MongoDB",
    link: "https://github.com/gemadp01/backend-cafe-bbpvp",
  },
  {
    image: "project-images/mytayu-app-design-system.png",
    category: "UI UX",
    title: "My Tayu Design System",
    description: "My Tayu Design System with Figma",
    link: "https://www.figma.com/design/EdA9EdmO8bLSiVubG9dLmS/Wireframe-TAYU?node-id=0-1&t=ltXPbBK2adhUqTmH-1",
  },
  {
    image: "project-images/personal-web-design-system.png",
    category: "UI UX",
    title: "Personal Web Design System",
    description: "Personal Web Design System with Figma",
    link: "https://www.figma.com/design/49wpoz7gtVv3PvbLH8yowo/Personal-Website?node-id=234-61&t=VASS8SKuOqw0906o-1",
  },
  {
    image: "project-images/cafe-finder-design-system.png",
    category: "UI UX",
    title: "Cafe Finder Design System",
    description: "Cafe Finder Design System with Figma",
    link: "https://www.figma.com/design/9xdtiurKDJnKsZB270lMcS/cafe-prototype?node-id=0-1&t=lKkfzBYNhTgaTUyu-1",
  },
] as const;
