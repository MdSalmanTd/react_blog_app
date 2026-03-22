import { Navigate, Outlet } from "react-router-dom";
import PublicNavbar from "../PublicNavbar";

const PublicLayout = () => {
  const auth = false;
  if (auth) {
    return <Navigate to="/signup" />
  }
  return (
    <div className="min-h-screen bg-slate-50">
      <PublicNavbar />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default PublicLayout