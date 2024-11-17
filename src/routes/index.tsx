import Root from "../pages/root";
import {Home} from "../pages/home";
import {About} from "../pages/about";
import {Contact} from "../pages/contact";

export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];
