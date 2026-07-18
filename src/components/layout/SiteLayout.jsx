import { Outlet } from "react-router-dom";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-white text-[#222]">
      <MobileNav />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}