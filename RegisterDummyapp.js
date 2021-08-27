import { BrowserRouter as Router, Link, Route,Switch } from "react-router-dom";
import HomePage from "./main/HomePage/HomePage";
import SearchPage from "./main/SearchPage/SearchPage";
import Register from "./main/Register/Register";
import Login from "./main/Login/Login";
import ExhibitPage from "./main/ExhibitPage/Exhibitpage";
import Exhibitinfo from "./main/Exhibitinfo/exhibitinfo";
import AccountPage from "./main/Account/AccountPage";
import AboutUsMain from "./main/AboutUsMain/AboutUsMain";
import CreateExhibit from "./admin/CreateExhibit/CreateExhibit";
import Addartwork from "./admin/AddArtwork/addartwork";
import Dashboard from "./admin/Dashboard/Dashboard";
import Exhibit from "./admin/Exhibit/exhibit";
import AdminLogin from "./admin/Login/AdminLogin";
import Profile from "./admin/Profile/profile";
import AdminProfilePage from "./admin/adminProfile/AdminProfilePage";
import Roles from "./admin/Roles/Roles";
import SignUp from "./admin/SignUp/SignUp";
import  ProtectedRoute  from "./main/Register/protectedRoute";
import { AuthContext } from "./main/Register/auth";
import { useState } from "react";

function App(props) {
  const [authTokens, setAuthTokens] =useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <div className="App">
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/account" component={AccountPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/exhibit" component={ExhibitPage} />
          <Route exact path="/info" component={Exhibitinfo} />
          <Route exact path="/account" component={AccountPage} />
          <Route exact path="/about" component={AboutUsMain} />

          {/* admin page switch route */}

          <Route exact path="/admin-addart" component={Addartwork} />
          <Route exact path="/admin-create" component={CreateExhibit} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/admin-exhibit" component={Exhibit} />
          <Route exact path="/admin-login" component={AdminLogin} />
          <Route exact path="/admin-profile" component={AdminProfilePage} />
          <Route exact path="/admin-role" component={Roles} />
          <Route exact path="/admin-signup" component={SignUp} />
          <Route exact path="/adminprofile" component={Profile} />
        </Switch>
      </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
