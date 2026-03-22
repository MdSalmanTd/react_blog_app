import { Navigate, Outlet } from "react-router-dom";
import PrivateNavbar from "../PrivateNavbar";

const PrivateLayout = () => {
  const auth = false;
  if (!auth) {
    return <Navigate to="/login" />
  }
  return (
    <div className="min-h-screen bg-slate-50">
      <PrivateNavbar />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default PrivateLayout