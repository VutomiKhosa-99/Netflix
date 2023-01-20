import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login";
// import { AuthContext } from "./context/authContext/AuthContext";
// import { useContext } from "react";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import MovieList from "./pages/movieList/MovieList";
import { Movie } from "@mui/icons-material";
import NewMovie from "./pages/newMovie/NewMovie";

function App() {
//   const { user } = useContext(AuthContext);

   const user = true;
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
        /> */}
        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route  path="/" 
                      exact element={<Home />} 
              />
              <Route 
                      path="/users" 
                      element={<UserList />} 
              />
              <Route 
                      path="/user/:userId" 
                      element={<User />} 
              />
              <Route 
                      path="/newUser" 
                      element={<NewUser />} 
              />
              <Route 
                      path="/movies" 
                      element={<MovieList />} 
              />
              <Route  path="/movie/:movieId"  
                      element={<Movie />} 
              />
              <Route  path="/newMovie" 
                      element={<NewMovie />} 
              />
              <Route  path="/lists"  
                      element={<ListList />} 
              />
              <Route  path="/list/:listId"  
                      element={<List />} 
              />
              <Route  path="/newlist" 
                      element={<NewList />} 
              />  
            </div>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
