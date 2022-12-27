import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const {user,isAuthenticated} = useSelector((state) => state.auth);


  
  if (isAuthenticated) {
    return <Navigate to={"/blogs"} />;
  }

  return children;
};

export default PublicRoute;