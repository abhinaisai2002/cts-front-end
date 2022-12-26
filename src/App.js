import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import BlogForm from "./pages/BlogForm";


function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={ <Navigate to="/blogs"/> } />
        <Route exact path="/blogs" element={<HomePage />} />
        <Route path="/blogs/new" element={<BlogForm />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>

    </>
  );
}

export default App;
