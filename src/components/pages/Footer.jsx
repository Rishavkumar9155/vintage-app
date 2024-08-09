import React from 'react';
import { IoSendOutline } from "react-icons/io5";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoMailSharp } from "react-icons/io5";

const Footer = () => {
  const Login = () => {
    alert("Login successful, thanks for logging in");
  };

  return (
    <footer className='footer w-full text-white flex flex-col items-center justify-center bg-black'>
      <div className="footer-content w-full max-w-screen-xl px-4 py-8">
        <div className="footer-header text-center mb-8">
          <h1 className='text-4xl md:text-5xl font-futura'>VINTAGE</h1>
        </div>

        <div className="footer-main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="subscribe flex flex-col items-center">
            <h1 className='text-xl font-light mb-4 text-center'>SUBSCRIBE TO OUR VINTAGE SITE</h1>
            <div className="flex items-center border-b-2 border-gray-400 w-full max-w-sm">
              <input
                type="email"
                placeholder='E-mail address..'
                className='w-full px-2 py-1 bg-black text-white placeholder-gray-400 outline-none'
              />
              <IoSendOutline className='text-2xl ml-4 cursor-pointer' onClick={Login} />
            </div>
          </div>

          <div className="help flex flex-col items-center">
            <h1 className='text-xl mb-4 text-center'>Do you need help?</h1>
            <ul className='space-y-2 text-center text-sm text-gray-400'>
              <li><a href="tel:7209664086" className='hover:text-white'>Call us +917209664086</a></li>
              <li className='hover:text-white'>Write us on WhatsApp</li>
              <li className='hover:text-white'>Chat with our Client Service</li>
              <li className='hover:text-white'>Contacts</li>
              <li className='hover:text-white'>FAQ</li>
              <li className='hover:text-white'>Sitemap</li>
            </ul>
          </div>

          <div className="services flex flex-col items-center">
            <h1 className='text-xl mb-4 text-center'>EXCLUSIVE SERVICES</h1>
            <ul className='space-y-2 text-center text-sm text-gray-400'>
              <li className='hover:text-white'>Vintage Services</li>
              <li className='hover:text-white'>Track your order</li>
              <li className='hover:text-white'>Returns</li>
            </ul>
          </div>

          <div className="legal flex flex-col items-center">
            <h1 className='text-xl mb-4 text-center'>LEGAL TERMS AND CONDITIONS</h1>
            <ul className='space-y-2 text-center text-sm text-gray-400'>
              <li className='hover:text-white'>Legal Notice</li>
              <li className='hover:text-white'>Privacy Statement</li>
              <li className='hover:text-white'>Terms of Sale</li>
            </ul>
          </div>
        </div>

        <div className="divider my-8 h-0.5 bg-gray-700"></div>

        <div className="social flex flex-col items-center text-xl mb-4">
          <p className='text-lg'>Interact with us</p>
          <div className="social-icons flex space-x-4 mt-4">
            <a href="https://github.com/Rishavkumar9155?tab=repositories" className='text-2xl hover:text-gray-300'><VscGithubInverted /></a>
            <a href="https://www.linkedin.com/in/rishav-kumar-1616b21a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-2xl hover:text-gray-300'><FaLinkedin /></a>
            <a href="https://www.instagram.com/invites/contact/?i=clbz7fmi7b34&utm_content=8ey1jfz" className='text-2xl hover:text-gray-300'><RiInstagramFill /></a>
            <a href="mailto:rishu9905213580@gmail.com" className='text-2xl hover:text-gray-300'><IoMailSharp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
