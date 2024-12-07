import { Outlet } from "react-router-dom";
import Header from "./_components/Header";

export default function () {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}
