import * as Icons from "react-icons/fa";


export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "Art",
    path: "./art",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaArtstation />,
  },
  {
    id: 3,
    title: "Blogs",
    path: "./blogs",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaBlog />,
  },
  {
    id: 4,
    title: "Contact",
    path: "./contactus",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaMailBulk />,
  },
];
