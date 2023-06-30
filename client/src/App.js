// import './App.css';
// import Login from './Pages/Login/Login';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import "./style.scss";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {

  // const currentUser = true; //user is not logged in, this is for authentication purpose

  const {currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext);

  const queryClient = new QueryClient();
  // console.log(darkMode);

  const Layout = () => {
      return(
        <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{display: "flex"}}>
          <LeftBar />
          <div style={{flex: 6}}>
            <Outlet />
          </div>
          <RightBar />
          </div>
        </div>
        </QueryClientProvider>
      )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to = "/login" />
    }

    else {
      return children;
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },

        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/register",
      element: <Register />,
    },
  ]);
  
  return (
    <div>
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
