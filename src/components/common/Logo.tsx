import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to bg-cyan-400 text-transparent bg-clip-text hover:cursor-pointer"
      href="/"
    >
      Form-builder
    </Link>
  );
};

export default Logo;
