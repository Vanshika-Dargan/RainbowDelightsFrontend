import React from 'react';
import { FaFacebookF, FaTwitter, FaEnvelope, FaTiktok } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="text-black p-10 flex justify-around items-start bgcolor">
      <div className="space-y-4">
        <h3 className="font-extrabold text-xl">Opening hours</h3>
        <p className="font-semibold">Tuesday - Friday: 10:00 - 16:45</p>
        <p className="font-semibold">Saturday: 10:00 - 15:00</p>
        <p className="font-semibold">Sunday: 11:00 - 15:00</p>
        <p className="font-semibold">Monday: Closed</p>
      </div>
      <div className="space-y-4">
        <h3 className="font-extrabold text-xl">Contact</h3>
        <p className="font-semibold">Address: Maurijnweg 682 III, NJ 3236 SM</p>
        <p className="font-semibold">Phone: +91 89011 76434</p>
        <p className="font-semibold">Mail: rainbowdelights@gmail.com</p>
      </div>
      <div className="space-y-4">
        <h3 className="font-extrabold text-xl">Follow us</h3>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank"><FaFacebookF className="cursor-pointer" /></a>
          <a href="https://twitter.com/" target="_blank"><FaTwitter className="cursor-pointer" /></a>
          <a href="https://mail.google.com" target="_blank"><FaEnvelope className="cursor-pointer" /></a>
          <a href="https://www.tiktok.com" target="_blank"><FaTiktok className="cursor-pointer" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
