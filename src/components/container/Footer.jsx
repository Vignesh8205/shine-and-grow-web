import React, { useEffect, useState } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import { motion } from "framer-motion";
import { numbers, socialmedialink } from "../../Data";

const Footer = () => {
  const [selectedNumber, setSelectedNumber] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    setSelectedNumber(numbers[randomIndex]);
  }, []);

  return (
    <motion.footer
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-6 sm:p-10"
    >
      <div className="grid gap-8 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 text-white">
  {/* Logo/About (1st column) */}
  <div className="col-span-1 md:col-span-1">
    <div className="flex items-center gap-2 mb-4">
      <img
        src="/src/assets/navLogo.png"
        alt="ShineGrow Logo"
        className="h-20 sm:h-24 md:h-24 w-auto"
      />
      <h2 className="text-lg font-bold">ShineGrow Kids</h2>
    </div>
    <p className="text-sm leading-6">
      ShineGrow Kids is your child's digital companion for fun-filled,
      interactive learning. We help little minds grow with love,
      creativity, and care.
    </p>
  </div>

  {/* Explore Learning (2nd column) */}
  <div className="col-span-1">
    <h2 className="text-lg font-bold mb-4">Explore Learning</h2>
    <ul className="space-y-2">
      <li><a href="#" className="hover:underline text-sm">Phonics & Reading</a></li>
      <li><a href="#" className="hover:underline text-sm">Numbers & Math</a></li>
      <li><a href="#" className="hover:underline text-sm">Creative Activities</a></li>
      <li><a href="#" className="hover:underline text-sm">Special Needs Programs</a></li>
    </ul>
  </div>

  {/* Quick Links (3rd column) */}
  <div className="col-span-1">
    <h2 className="text-lg font-bold mb-4">Quick Links</h2>
    <ul className="space-y-2">
      <li><a href="#" className="hover:underline text-sm">Parent Support</a></li>
      <li><a href="#" className="hover:underline text-sm">Safety Guidelines</a></li>
      <li><a href="#" className="hover:underline text-sm">Careers</a></li>
      <li><a href="#" className="hover:underline text-sm">Terms & Privacy</a></li>
    </ul>
  </div>

  {/* Stay Connected (4th column) */}
  <div className="col-span-1">
    <h2 className="text-lg font-bold mb-4">Stay Connected</h2>
    <div className="text-sm mb-2">{socialmedialink.email}</div>
    <div className="text-sm mb-4">{selectedNumber ? selectedNumber.replace("+91", "+91 ") : ""}</div>
    <div className="flex gap-4 mt-2 text-xl">
      <a href={socialmedialink.facebook} className="hover:scale-110"><BsFacebook /></a>
      <a href={socialmedialink.instagram} className="hover:scale-110"><BsInstagram /></a>
      <a href={socialmedialink.twiter} className="hover:scale-110"><BsTwitter /></a>
      <a href={socialmedialink.youtupe} className="hover:scale-110"><BsYoutube /></a>
    </div>
  </div>
</div>

     {/* Footer Bottom */}
      <div className="text-center text-white text-xs mt-10">
        © {new Date().getFullYear()} ShineGrow Kids. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
