"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white px-6 py-4 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          
          <span className="font-semibold text-lg">AI Code Reviewer</span>
        </Link>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          © 2025 All Rights Reserved — Developed by{" "}
          <span className="text-white font-medium">Ganesh Pratap Vishwakarma, Abhijeet Patel</span>
        </div>

       
       
      </div>
    </footer>
  );
};

export default Footer;
