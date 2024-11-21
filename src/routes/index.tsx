import Root from "../pages/root";
import { Home } from "../pages/home";
import { Contact } from "../pages/contact";
import { Service } from "../pages/service";
import { Testimonials } from "../pages/testimonials";
import { AboutUs } from "../pages/aboutUs";

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
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
    ],
  },
];
