import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between bg-gray-200 p-10">
        <div className="ml-6">
          <span className="">Services</span>
          <div className="flex flex-col">
            <a className="">Branding</a>
            <a className="">Design</a>
            <a className="">Marketing</a>
            <a className="">Advertisement</a>
          </div>
        </div>
        <div>
          <span className="">Company</span>
          <div className="flex flex-col">
            <a className="">About us</a>
            <a className="">Contact</a>
            <a className="">Jobs</a>
            <a className="">Press kit</a>
          </div>
        </div>
        <div>
          <span className="">Legal</span>
          <div className="flex flex-col">
            <a className="">Terms of use</a>
            <a className="">Privacy policy</a>
            <a className="">Cookie policy</a>
          </div>
        </div>
        <div className="mr-6">
          <span className="">Newsletter</span>
          <div className="w-80">
            <label className="">
              <span className="">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="w-full pr-16"
              />
              <button className="absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
