import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet } from "react-router-dom";
import { authStore } from "store";
import AdminMenu from "../components/AdminMenu";

interface IAdminProps {}
export const Admin: React.FC<IAdminProps> = observer(() => {

  if(authStore.isLoginSuccess === false) {
    window.location.href = "/login"
  }

  return (
    <div>
      <div className="mb-6 mt-6 px-6">
        <h1>Admin</h1>
      </div>
    </div>
  );
});
