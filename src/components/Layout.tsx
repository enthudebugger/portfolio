import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/25 to-slate-900 relative overflow-hidden">
      <div className="star-field fixed inset-0 z-0 pointer-events-none" aria-hidden>
        {Array.from({ length: 280 }).map((_, i) => (
          <div
            key={i}
            className={`star ${i % 7 === 0 ? "star--float" : i % 5 === 0 ? "star--fast" : ""}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1.5}px`,
              height: `${Math.random() * 4 + 1.5}px`,
              animationDelay: `${Math.random() * 2.5}s`,
              animationDuration: i % 5 === 0 ? `${0.8 + Math.random() * 0.6}s` : `${1.2 + Math.random() * 1.2}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
