import Mistubishicon from './../../../assets/landing-page/MistubusiIcon.svg';
import NetflixIcon from './../../../assets/landing-page/NetflixIcon.svg';
import React from 'react';
import YoutubeIcon from './../../../assets/landing-page/YoutubeIcon.svg';

const PartnerView = () => {
  return (
    <div className="bg-[#F2F7F7]">
      <div className="container py-[55px] mx-auto">
        <h2 className="text-[28px] text-center font-medium pb-[75px]">
          The World's Most Trusted Crypto Payments Partner
        </h2>
        <div className="grid grid-cols-3 text-center">
          <div>
            <h3 className="text-[40px] font-medium text-[#348888]">$10B+</h3>
            <p className="text-[20px] font-medium">
              Over $10 Billion In Crypto <br />
              Payments Since 2013
            </p>
          </div>
          <div>
            <h3 className="text-[40px] font-medium text-[#348888]">
              100K+
            </h3>
            <p className="text-[20px] font-medium">
              Serving 100,000+ <br />
              Merchants Globally
            </p>
          </div>
          <div>
            <h3 className="text-[40px] font-medium text-[#348888]">
              190+
            </h3>
            <p className="text-[20px] font-medium">
              Active Worldwide In 190+ <br />
              Countries
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 text-center pt-[80px]">
          <div className="flex justify-center">
            <img
              src={YoutubeIcon}
              alt="YoutubeIcon" />
          </div>
          <div className="flex justify-center">
            <img className=""
              src={Mistubishicon}
              alt="Mistubishicon" />
          </div>
          <div className="flex justify-center">
            <img className=""
              src={NetflixIcon}
              alt="NetflixIcon" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default PartnerView;
