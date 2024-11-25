import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Root() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Root;
