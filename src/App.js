import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import BlogForm from "./pages/BlogForm";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import ViewBlog from "./pages/ViewBlog";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { authActions } from "./store/slices/authSlice";
import { loadingActions } from "./store/slices/loadingSlice";


function App() {


  const [cookie, setCookie, removeCookie] = useCookies('blog-app');
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookie['accessToken'] && cookie['user']) {
      dispatch(authActions.loginUser({
        accessToken: cookie['accessToken'],
        user:cookie['user']
      }))
    }
    dispatch(loadingActions.hideLoading());
  },[])

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={
            <Navigate to="/blogs" />
        } />
        <Route exact path="/blogs" element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        } />
        <Route exact path="/blogs/:blogId" element={
          <PrivateRoute>
            <ViewBlog />
          </PrivateRoute>
        } />
        <Route exact path="/myblogs" element={
          <PrivateRoute>
            <HomePage myBlogs={true} />
          </PrivateRoute>
        } />
        <Route path="/blogs/new" element={
          <PrivateRoute>
            <BlogForm />
          </PrivateRoute>
        } />
        <Route path="/signin" element={
          <PublicRoute>
            <SignInPage />
          </PublicRoute>
        } />
        <Route path="/signup" element={
          <PublicRoute>
            <SignUpPage />
          </PublicRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
