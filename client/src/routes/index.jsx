import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
    const routesForPublic = [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/dashboard", element: <Dashboard /> }
    ];

    const router = createBrowserRouter([
        ...routesForPublic
    ]);
    return <RouterProvider router={router} />;
};

export default Routes;