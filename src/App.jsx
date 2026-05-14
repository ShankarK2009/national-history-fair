import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import {
  Archive,
  BookOpen,
  ChevronRight,
  Gavel,
  Home,
  Landmark,
  Menu,
  ScrollText,
  ShieldAlert,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  bibliography,
  featuredTimeline,
  navItems,
  pages,
  visualCredits,
} from "./data/siteData.js";
import { BibliographyPage } from "./pages/BibliographyPage.jsx";
import { ContentPage } from "./pages/ContentPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";

const iconMap = {
  home: Home,
  context: BookOpen,
  revolution: Landmark,
  reaction: ShieldAlert,
  collapse: Gavel,
  legacy: ScrollText,
  bibliography: Archive,
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function SiteShell() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <div className="paper-grain" aria-hidden="true" />
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="Terror's Turning Point home">
          <span className="brand-mark">TT</span>
          <span>
            <strong>Terror's Turning Point</strong>
            <small>APUSH History Fair</small>
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              >
                <Icon size={17} aria-hidden="true" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage timeline={featuredTimeline} />} />
          {pages.map((page) => (
            <Route
              key={page.slug}
              path={`/${page.slug}`}
              element={<ContentPage page={page} timeline={featuredTimeline} />}
            />
          ))}
          <Route
            path="/bibliography"
            element={<BibliographyPage bibliography={bibliography} visualCredits={visualCredits} />}
          />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>
          Built as a packet-source research website. Historical claims cite only the six sources in
          the project packet.
        </p>
        <NavLink to="/bibliography" className="footer-link">
          View bibliography and visual credits <ChevronRight size={16} />
        </NavLink>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteShell />
    </>
  );
}
