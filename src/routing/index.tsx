import React from "react";
import DefaultPage from "../pages/defaultPage";
import BlogPage from "../pages/blogPage";
import { BrowserRouter, Route, Routes } from "react-router";
import Loader from "../components/loader";
import BlogPost from "../pages/blogPost";

type Props = {};

type RouteInterface = {
  path: string;
  element: React.ReactNode;
};

const RoutingConfig = ({}: Props) => {
  const routes: RouteInterface[] = [
    {
      path: "/",
      element: <DefaultPage />,
    },
    {
      path: "/blog",
      element: <BlogPage />,
    },
    {
      path: "/blog/:title",
      element: <BlogPost />,
    },
  ];
  return (
    <>
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
};

export default RoutingConfig;
