import { RouterProvider } from "react-router-dom";
import "./App.css";
import Router from "./Router/Router";
import Navbar from "./nav/Navbar";


function App() {
  return <div className="m-5">
    <Navbar></Navbar>
    <RouterProvider router={Router} ></RouterProvider>
  </div>;
}

export default App;
