import React from "react";

function Layout({ children, className = "" }) {
  return (
    <div
      className={`w-full h-full z-0 bg-light dark:bg-dark px-32 ${className}`}
    >
      {children}
    </div>
  );
}

export default Layout;
