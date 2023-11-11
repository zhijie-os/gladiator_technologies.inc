import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "角斗士科技",
    path: "/",
    newTab: false,
  },
  // {
  //   id: 2,
  //   title: "About",
  //   path: "/about",
  //   newTab: false,
  // },
  {
    id: 33,
    title: "商用产品及方案",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "服务支持",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "关于角斗士",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "关于我们",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "联系我们",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "科技博客",
        path: "/blog",
        newTab: false,
      },
      // {
      //   id: 44,
      //   title: "Blog Sidebar Page",
      //   path: "/blog-sidebar",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
];
export default menuData;
