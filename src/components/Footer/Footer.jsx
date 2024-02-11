import React from 'react';
import { FaFacebookF, FaTwitter, FaEnvelope, FaTiktok } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="text-black p-10 flex justify-around items-start bgcolor">
      <div className="space-y-4">
        <h3 className="font-bold text-lg">Opening hours</h3>
        <p>Tuesday - Friday: 10:00 - 16:45</p>
        <p>Saturday: 10:00 - 15:00</p>
        <p>Sunday: 11:00 - 15:00</p>
        <p>Monday: Closed</p>
      </div>
      <div className="space-y-4">
        <h3 className="font-bold text-lg">Contact</h3>
        <p>Address: Maurijnweg 682 III, NJ 3236 SM</p>
        <p>Phone: +91 89011 76434</p>
        <p>Mail: rainbowdelights@gmail.com</p>
      </div>
      <div className="space-y-4">
        <h3 className="font-bold text-lg">Follow us</h3>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank"><FaFacebookF className="cursor-pointer" /></a>
          <FaTwitter className="cursor-pointer" />
          <FaEnvelope className="cursor-pointer" />
          <FaTiktok className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
