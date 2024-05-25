import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/about";
import AppointmentPage from "./pages/appointment";
import HomePage from "./pages/home";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import MainLayout from "./MainLayout";
import DashboardPage from "./pages/dashboard";
import AdminLayout from "./AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
