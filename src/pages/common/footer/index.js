import React from "react";
import FacebookLogo from './../../../assets/social-icons/Facebook.png';
import FooterLogo from './../../../assets/stable-pay-logo/footerLogo.png';

const Footer = () => {
  return (
    <footer className="text-center bg-[#2C4444] text-white">
      <div className="container px-6 pt-6">


        <div className="grid lg:grid-cols-5 md:grid-cols-2">
          <div className="mb-6">
            <h5 className="uppercase font-medium mb-2.5">StablesPay</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-white/60">
                  Fees/Pricing
                </a>
              </li>
              <li>
                <a href="#!" className="text-white/60">
                  Supported BlockChains
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-medium mb-2.5">Resources</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-white/60">
                  Merchant Tools
                </a>
              </li>
              <li>
                <a href="#!" className="text-white/60">
                  Integration Guide
                </a>
              </li>
              <li>
                <a href="#!" className="text-white/60">
                  Store Directory
                </a>
              </li>
              <li>
                <a href="#!" className="text-white/60">
                  Affiliate Information
                </a>
              </li>
              <li>
                <a href="#!" className="text-white/60">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-medium mb-2.5">Contact</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-white/60">
                  Support
                </a>
              </li>
              <li>
                <a href="#!" className="text-white/60">
                  Add your Stable Coin
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-medium mb-2.5">Legal</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-white/60">
                  Recruited Jurisdictions
                </a>
              </li>
              <li>
                <a href="#!" className="text-white/60">
                  User Agreement
                </a>
              </li>
              <li>
                <a href="#!" className="text-white/60">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h1 className="uppercase font-medium mb-2.5">News Letter</h1>

            <ul className="list-none mb-0">
              <li>
                <p className="text-white/60">Stay Up toDate with the Latest News</p>
              </li>
              <li>
              <div class="flex mt-4">
            <input
              type="text"
              class="
                h-auto
                p-2
                text-sm
                border border-white
                rounded-l-2xl
                text-grey-dark
              "
              placeholder="Your email address"
            />
            <button class="h-auto p-3 text-xs bg-[#348888] text-white rounded-r-2xl">
              Subscribe
            </button>
          </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-center p-4'>
        <img className="h-8 w-auto sm:h-10"
              src={FooterLogo}
              alt="" />
      </div>
      <div
        className="text-center"
      >
        © 2021 Copyright:
        <a className="text-white" href="https://tailwind-elements.com/">
          Tailwind Elements
        </a>
        
      </div>
     
    </footer>
  );
};

export default Footer;
