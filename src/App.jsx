import { RouterProvider, createBrowserRouter } from "react-router-dom";
//Pages
import { Login } from "./pages/login/Login";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>
    },
    {
        path: "/login",
        element: <Login/>
    }
])

function App() {
    return(
        <RouterProvider router={routes}/>
    )
}

export default App;
