"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/parcks", text: "PARCKS" },
    { href: "#", text: "CAPSULE" },
    { href: "#", text: "COMM" },
    { href: "#", text: "HUB" },
    { href: "#", text: "SUPPORT" },
  ];

  return (
    <header className="w-full bg-gray-200 relative z-50">

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:flex items-center justify-center h-12">
        <div className="flex items-center gap-10">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="w-6 h-6" />
          </Link>

          {links.map((l, i) => (
            <Link
              key={i}
              href={l.href}
              className="text-xs font-medium text-gray-800 hover:text-black"
            >
              {l.text}
            </Link>
          ))}

          <AiOutlineSearch size={16} />
        </div>
      </div>

      {/* ================= MOBILE / TABLET ================= */}
      <div className="lg:hidden relative flex items-center h-12 px-4">

        {/* CENTER LOGO */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2"
        >
          <img src="/logo.png" alt="Logo" className="w-6 h-6" />
        </Link>

        {/* RIGHT ICONS (SEARCH + TOGGLE) */}
        <div className="ml-auto flex items-center gap-5 z-10">
          <AiOutlineSearch size={20} />

          <button
            onClick={() => setOpen(!open)}
            className="relative w-6 h-6 flex flex-col justify-center items-end"
          >
            {!open ? (
              <>
                <span className="h-[2px] w-4 bg-black mb-1"></span>
                <span className="h-[2px] w-6 bg-black mb-1"></span>
                <span className="h-[2px] w-3 bg-black"></span>
              </>
            ) : (
              <>
                <span className="absolute w-6 h-[2px] bg-black rotate-45"></span>
                <span className="absolute w-6 h-[2px] bg-black -rotate-45"></span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* ================= DROPDOWN ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-gray-200 border-t border-gray-300"
          >
            <div className="flex flex-col py-5 px-4 gap-4">
              {links.map((l, i) => (
                <Link
                  key={i}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-gray-800"
                >
                  {l.text}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Navbar;
