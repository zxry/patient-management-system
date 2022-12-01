import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Patient from "./pages/patient-pages/Patient";
import Dashboard from "./pages/patient-pages/Dashboard";
import Reports from "./pages/patient-pages/Reports";

import Doctor from "./pages/doctor-pages/Doctor";
import DoctorPatients from "./pages/doctor-pages/DoctorPatients";
import DoctorPatient from "./pages/doctor-pages/DoctorPatient";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/patient">
            <Route index element={<Patient />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/doctor">
            <Route index element={<Doctor />} />
            <Route path="/patients" element={<DoctorPatients />} />
            <Route path="/patient" element={<DoctorPatient />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
