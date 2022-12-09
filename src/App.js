import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/containers/Main";
import Register from "./components/Login/containers/Register";
import Login from "./components/Login/containers/Login";
import Reports from "./components/Reports/containers/Main";
import ProtectedRoute from "./Router/ProtectedRoute";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route
                    path="/"
                    exact
                    element={
                        <ProtectedRoute>
                            <Main />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/transactions"
                    exact
                    element={
                        <ProtectedRoute>
                            <Main />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/reports"
                    exact
                    element={
                        <ProtectedRoute>
                            <Reports />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
