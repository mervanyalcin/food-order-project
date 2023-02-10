import { observer } from "mobx-react-lite";
import React from "react";
import { authStore } from "store";

interface ILogoutProps {}
export const Logout: React.FC<ILogoutProps> = observer(() => {
  authStore.isLoginSuccess = false;

  window.location.href = "/";

  return <div>Logout</div>;
});

export default Logout;
