import { RouterProvider, createBrowserRouter } from "react-router-dom";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>
    },
    {
        path: "/login",
        element: <div>Login Page</div>
    }
])

function App() {
    return(
        <RouterProvider routes={routes}/>
    )
}

export default App;
