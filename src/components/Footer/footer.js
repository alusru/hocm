import React from "react";
const CURRENT_YEAR = new Date().getFullYear();
const Footer = () => (
    
  <footer className="footer mt-auto py-3">
    <div className="container">
      <span className="text-muted">
       {CURRENT_YEAR} all rights reserved
      </span>
    </div>
  </footer>
);

export default Footer;