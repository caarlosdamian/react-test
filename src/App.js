import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { User } from "./pages/users/User";
import NotFound from "./pages/Not Found/NotFound";
import { Login } from "./pages/Login/Login";
import { SingleUser } from "./pages/SingleUser/SingleUser";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
 
  return (
    <Router>
      <Routes>
        <Route
          path="/prueba/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/">
          <Route
            index
            element={
              <PrivateRoute>
                <Home/>
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/users">
          <Route
            index
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
          <Route
            path=":userId"
            element={
              <PrivateRoute>
                <SingleUser />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
