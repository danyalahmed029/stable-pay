import React from 'react';
import OrangeUnderline from './../../../assets/social-icons/orangeUnderline.svg';
import BinanceIcon from './../../../assets/social-icons/Binance.svg';
import NetflixIcon from './../../../assets/social-icons/netflix.svg';
import PlaystoreIcon from './../../../assets/social-icons/playstore.svg';
import VimeoIcon from './../../../assets/social-icons/vimeo.svg';

const IntegrationView = () => {
  return (
    <div className='bg-white'>
      <div className='container py-[55px] mx-auto'>
        <h2 className='text-[28px] text-center font-medium'>
          Start Accepting Stables Coin Payment
        </h2>
        <div className='flex justify-center'>
          <img className='h-8 w-1/5 sm:h-10' src={OrangeUnderline} alt='' />
        </div>
        <div className='flex justify-center p-4'>
          <p className='text-lg'>
            Set up StablesPay seamlessly on the most popular platforms
          </p>
        </div>
        <div className='grid grid-cols-4 text-center p-4'>
          <div className='flex justify-center'>
            <img
              className='h-8 w-1/5 sm:h-10'
              src={BinanceIcon}
              alt='BinanceIcon'
            />
            <h5 className='font-bold p-2'>Binance</h5>
          </div>
          <div className='flex justify-center'>
            <img
              className='h-8 w-1/5 sm:h-10'
              src={PlaystoreIcon}
              alt='PlaystoreIcon'
            />
            <h5 className='font-bold p-2'>Playstore</h5>
          </div>
          <div className='flex justify-center'>
            <img
              className='h-8 w-1/5 sm:h-10'
              src={VimeoIcon}
              alt='VimeoIcon'
            />
            <h5 className='font-bold p-2'>Vinmo</h5>
          </div>
          <div className='flex justify-center'>
            <img
              className='h-8 w-1/5 sm:h-10'
              src={NetflixIcon}
              alt='NetflixIcon'
            />
            <h5 className='font-bold p-2'>Netflix</h5>
          </div>
        </div>
        <div className='flex justify-center pt-6'>
          <button className='whitespace-nowrap underline text-[16px] font-medium text-[#348888] hover:text-gray-900'>
            See all plug in
          </button>
        </div>
        <div className='flex justify-center pt-6'>
          <button className='accept-crypto'>
            Accept Crypto Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default IntegrationView;
