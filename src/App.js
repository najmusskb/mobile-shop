import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
