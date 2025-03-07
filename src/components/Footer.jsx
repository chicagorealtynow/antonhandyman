import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Anton Handyman Services. All rights
          reserved.
        </p>
        <p>
          <a
            href="/privacy-policy"
            className="text-gray-400 hover:text-gray-200"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="/terms-of-service"
            className="text-gray-400 hover:text-gray-200"
          >
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
