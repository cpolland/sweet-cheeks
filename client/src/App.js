import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import AddComment from "./pages/AddComment";
import BrowseProfiles from "./pages/BrowseProfiles";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import ViewComments from "./pages/ViewComments";
import ViewProfiles from "./pages/ViewProfiles";
import Login from "./pages/Login";
import ProtectedPageExample from "./pages/ProtectedPageExample";
import SignUp from "./pages/SignUp";
import { client } from "./util/apolloClient";
import { AuthProvider } from "./util/auth";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-comment" element={<AddComment />} />
            <Route path="/browse-profiles" element={<BrowseProfiles />} />
            <Route path="/community" element={<Community />} />
            <Route path="/view-comments" element={<ViewComments />} />
            <Route path="/view-profiles/:userId" element={<ViewProfiles />} />
            {/* Use <RequiredAuth> for pages that should only be accessible to a
            user that has logged in.*/}
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPageExample />
                </RequireAuth>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
