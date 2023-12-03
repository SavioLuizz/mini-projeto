import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "./pages/App";
import Student from "./pages/Student";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/students/:id",
            element: <Student />,
        },
    ]);

    return <RouterProvider router={router} />
}

export default Routes