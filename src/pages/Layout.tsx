import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="h-full w-full">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
