import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import UsersTable from "./components/usersTable";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route elemen={<PrivateRoutes />}>
            <Route path="/" element={<HomePage />}>
              <Route path="/usersTable" element={<UsersTable/>}/>
            </Route>
          </Route>
          <Route path="/usersTable" element={<UsersTable />}></Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
