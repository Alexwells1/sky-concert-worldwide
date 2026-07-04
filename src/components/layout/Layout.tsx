import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StarField from "./StarField";

export default function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Single cinematic star field mounted once, persists across all routes */}
      <StarField />

      <Header />

      <main style={{ flex: 1, position: "relative", zIndex: 1 }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
