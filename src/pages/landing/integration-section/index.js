import React from 'react'
import OrangeUnderline from './../../../assets/social-icons/orangeUnderline.svg';

const IntegrationView = () => {
  return (
    <div className='bg-white container px-6 pt-6'>
      <div className='flex justify-center pt-4'>
        <h1 className='font-bold text-2xl'>Start Accepting Stables Coin Payment</h1>
      </div>
      <div className='flex justify-center'>
      <img className='h-8 w-1/5 sm:h-10' src={OrangeUnderline} alt='' />
      </div>
      <div className='flex justify-center p-4'>
      <p className='text-lg'>Set up StablesPay seamlessly on the most popular platforms</p>
      </div>
    </div>
  )
}
export default IntegrationView;
