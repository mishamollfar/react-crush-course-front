import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

function RouterLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RouterLayout;
