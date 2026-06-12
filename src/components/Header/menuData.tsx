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
        path: "/about",
        newTab: false,
      },
      {
        id: 22,
        title: "Leadership",
        path: "/leadership",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Solutions",
    path: "/solutions",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Services",
        path: "/solutions/services",
        newTab: false,
      },
      {
        id: 32,
        title: "Industries",
        path: "/solutions/industries",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Partners",
    path: "/partners",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
