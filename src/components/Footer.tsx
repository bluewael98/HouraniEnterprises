'use client'
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Dropdown } from 'flowbite-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white bottom-0 w-screen overflow-hidden flex justify-center items-center flex-col ">
      
      <hr className="my-8 border-gray-400" />
      <img src="/helogo.png" className="max-w-[80px]" />
        <div className='flex ss:flex-row xxs: xxs:gap-2 flex-col   justify-center items-center pb-8'>
         

        <div className="text-center flex flex-col">
          <p className="text-sm">
          Copyright © 2023 Hourani Enterprises - All Rights Reserved. 
          </p>
          <p>
          02 9703 5732 
   
          </p>
        

      </div>
      </div>
     
    </footer>
  );
};

export default Footer;