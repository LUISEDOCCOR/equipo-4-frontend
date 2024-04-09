import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";
//Pages
import { Login } from "./pages/Login/Login";  
import { Home } from "./pages/Home/Home";

function App() {
	
	const router = createBrowserRouter([
		{
	  		path: "/",
	  		element: <Home/>
		},
		{
			path: "/login",
			element: <Login/>
		}
  	]);

	return(
		<RouterProvider router={router} />
	)
}

export default App;
