import React from "react";

const Footer = ({ mode, toggle }) => {
  return (
    <footer className={`${mode ? "bg-white" : "bg-gray-800 text-white"} p-4 mt-10`}>
      <div className="container mx-auto">
        <p className="text-center">© 2022 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
