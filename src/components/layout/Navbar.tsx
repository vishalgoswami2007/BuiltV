import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Globe2, Menu, X } from "lucide-react";

import logo from "../../assets/logo/builtv-logo.png";
import { navigationItems } from "../../data/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-[#050608]/80 px-4 backdrop-blur-xl sm:px-5">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3"
            aria-label="BuiltV home"
          >
            <img
              src={logo}
              alt="BuiltV"
              className="h-9 w-9 object-contain"
            />

            <span className="text-lg font-semibold tracking-tight text-white">
              BuiltV
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-slate-300 transition-colors hover:border-white/20 hover:text-white"
            >
              <Globe2 size={16} />
              EN
            </button>

            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition-transform duration-200 hover:scale-[1.02]"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {isOpen && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-[#080A0E]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? "bg-white/5 text-white"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-4 border-t border-white/10 pt-4">
              <button
                type="button"
                className="mb-3 flex w-full items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300"
              >
                <Globe2 size={16} />
                English
              </button>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black"
              >
                Start a Project
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;