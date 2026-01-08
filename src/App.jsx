import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/Firebase";
import ProtectedRoute from "./Components/ProtectedRoute";

const Login = lazy(() => import("./Pages/Login"));
const Signup = lazy(() => import("./Pages/Signup"));
const Home = lazy(() => import("./Pages/Home"));
const Watchlist = lazy(() => import("./Pages/Watchlist"));

// Loader UI
const Loader = () => (
  <div className="h-screen flex items-center justify-center bg-black text-white">
    Loading...
  </div>
);

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>

          
          <Route
            path="/"
            element={user ? <Navigate to="/home" /> : <Navigate to="/login" />}
          />

        
          <Route
            path="/login"
            element={user ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/home" /> : <Signup />}
          />

         
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

         
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
