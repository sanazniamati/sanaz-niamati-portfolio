import React from "react";

function Layout({ children, className = "" }) {
  return (
    <div
      className={`w-full min-h-calc-(100vh-(footer-header))  inline-block z-0 bg-light px-32 ${className}`}
    >
      {children}
    </div>
  );
}

export default Layout;
