import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
 {
    id: 2,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Who We Are",
        path: "/about#who-we-are",
        newTab: false,
      },
      {
        id: 22,
        title: "Leadership",
        path: "/leadership",
        //path: "/about#leadership",
        newTab: false,
      },
      {
        id: 23,
        title: "Work With Us",
        path: "/WorkWithUs",
        newTab: false,
      },
    ],
  },
  {
    id: 33,
    title: "Solutions",
    path: "/solutions",   // ADD THIS LINE
    newTab: false,
    submenu: [
      {
        id: 331,
        title: "Services",
        path: "/solutions/services",
        newTab: false,
      },
      {
        id: 332,
        title: "Industries",
        path: "/solutions/industries",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Partners",
    path: "/Partners",
    newTab: false,
    
  },
  {
    id: 4,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;