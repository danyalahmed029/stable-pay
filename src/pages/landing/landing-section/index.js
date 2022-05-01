import BannerBg from './../../../assets/landing-page/banner-bg.png';
import BusinessIcon from './../../../assets/landing-page/BusinessIcon.svg';
import PersonalIcon from './../../../assets/landing-page/PersonalIcon.svg';
import React from 'react'
import StablePayment from './../../../assets/landing-page/stable-payment.png';

const LandingView = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 py-5">
          <div >
            <img className=""
              src={StablePayment}
              alt="Stable Payment" />
          </div>

          <div className="flex flex-col items-start justify-center h-full">
            <h1 className="text-[#348888] font-bold text-[60px] pb-[60px]">
              StablePays <br />
              <span className="text-[#FA7F08]">
                Ease of Payment
              </span>
            </h1>
            <p className="text-[16px] leading-[24px] mb-[20px] font-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ridiculus hendrerit aenean quam rhoncus ac libero nunc netus. Augue id faucibus libero, aliquam, eu purus vitae. Tincidunt id aliquam i
              nteger felis donec magna bibendum.
            </p>
            <a href="#" className="rounded-[20px] text-[#348888] text-[14px] font-poppins font-semibold border  px-[60px] py-[15px] border-[#348888] btn-getstarted">Get Started</a>
          </div>
        </div>

      </div>
      <div className="banner-card" style={{ backgroundImage: `url(${BannerBg})` }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-[74px] pt-5">
            <div >
              <div className="business-card flex pb-[20px]">
                <div className="card-icon flex items-center justify-center">
                  <img className=""
                    src={BusinessIcon}
                    alt="BusinessIcon" />
                </div>
                <div className="card-content">
                  <h2 className="text-[28px] mt-[-40px] font-medium">Business</h2>
                  <p className='text-[#fff] pt-[24px] text-[20px]'>Serving 100,000+ merchants globally</p>
                  <ul className='text-[#fff] text-[16px] pl-[20px] pb-[30px] font-poppins'>
                    <li>Real-time global payments</li>
                    <li>Industry-low processing fees of only 0.5%</li>
                    <li>Reduced fraud risk with no chargebacks</li>
                    <li>Fiat conversion options</li>
                  </ul>
                  <a href="#" className="rounded-[20px] text-[#fff] font-poppins font-semibold text-[14px]  border block text-center  px-[60px] py-[15px] bg-[#348888] border-[#348888] btn-access">ACCEPT CRYPTO NOW</a>

                </div>

              </div>
            </div>
            <div className="business-card personal-card flex pb-[20px]">
              <div className="card-icon flex items-center justify-center">
                <img className=""
                  src={PersonalIcon}
                  alt="PersonalIcon" />
              </div>
              <div className="card-content">
                <h2 className="text-[28px] mt-[-40px] font-medium">Personal</h2>
                <p className='text-[#fff] pt-[24px] text-[20px]'>1,000,000+ Wallet users love these features</p>
                <ul className='text-[#fff] text-[16px] pl-[20px] pb-[30px]'>
                  <li>Hold 2,315+ cryptocurrencies on one platform</li>
                  <li>Convert your crypto</li>
                  <li>Purchase gift cards</li>
                </ul>
                <a href="#" className="rounded-[20px] text-[#fff] text-[14px] font-poppins font-semibold border block text-center  px-[60px] py-[15px] bg-[#FA7F08] border-[#FA7F08] btn-access">ACCEPT CRYPTO NOW</a>

              </div>

            </div>
            <div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default LandingView;
