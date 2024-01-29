import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-slate-200 py-8 px-8 flex items-center justify-between flex-wrap">
      <Link className="flex-shrink-0" href="/dashboard">
        Dashboard
      </Link>
      <button>Download</button>
    </div>
  );
}

export default Navbar;
