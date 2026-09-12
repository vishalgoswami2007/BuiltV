import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Globe2, Menu, X } from "lucide-react";

import logo from "../../assets/logo/builtv-logo.png";
import { navigationItems } from "../../data/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <nav className="flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-[#050608]/85 px-3 shadow-lg shadow-black/20 backdrop-blur-xl sm:h-16 sm:px-5">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex min-w-0 items-center gap-2.5 sm:gap-3"
            aria-label="BuiltV home"
          >
          <Link to="/" aria-label="BuiltV home"> 
            <img
              src={logo}
              alt="BuiltV"
              className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
            />
          </Link>
            <span className="truncate text-base font-semibold tracking-tight text-white sm:text-lg">
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
              className="flex min-h-11 items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-slate-300 transition-colors hover:border-white/20 hover:text-white"
            >
              <Globe2 size={16} />
              EN
            </button>

            <Link
              to="/contact"
              className="flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition-transform duration-200 hover:scale-[1.02]"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {isOpen && (
          <div className="mt-2 max-h-[calc(100svh-84px)] overflow-y-auto rounded-2xl border border-white/10 bg-[#080A0E]/95 p-3 shadow-2xl backdrop-blur-xl sm:p-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3.5 text-sm transition-colors ${
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

            <div className="mt-3 border-t border-white/10 pt-3 sm:mt-4 sm:pt-4">
              <button
                type="button"
                className="mb-3 flex min-h-12 w-full items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300"
              >
                <Globe2 size={16} />
                English
              </button>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black"
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
