import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full  bg-slate-200 flex gap-40 ">
        <div className="font-bold text-4xl ">Pizzaro</div>
        <ul className="flex items-center justify-center gap-10">
          <li>Home</li>
          <li>Houses </li>
          <li>About</li>
          <li>Contact Us </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
