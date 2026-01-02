import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/Firebase";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import Watchlist from './Pages/Watchlist'

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
  path="/watchlist"
  element={
    <ProtectedRoute>
      <Watchlist />
    </ProtectedRoute>
  }
/>
  <Route path="/" element={<Home />} />
<Route path="/watchlist" element={<Watchlist />} />


      </Routes>
    </Router>
  );
}

export default App;
