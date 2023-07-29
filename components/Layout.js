import React from "react";

function Layout({ children, className = "" }) {
  return (
    <div
      className={`w-full z-0 bg-light dark:bg-dark px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

export default Layout;
