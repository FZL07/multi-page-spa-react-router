import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./componenets/about";
import Home from "./componenets/home";
import Root from "./componenets/Root";
import Error from "./componenets/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
