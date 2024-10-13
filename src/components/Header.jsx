import React from 'react';
import Logo from '/Logo.svg';
import VndIcon from '/vnd_Icon.svg';
import Arrow from '/downArrow.svg';

const header = () => {
  return (
    <header className='w-full  flex justify-center bg-header-gradient '>
      <div className='max-w-[1440px] h-[100px] w-full flex'>
        <div className='w-full px-[130px] flex justify-between items-center'>
          <div className='max-w-[443px] w-full h-[40px] flex justify-between items-center '>
            <div>
              <img src={Logo} alt='Logo' />
            </div>
            <nav className='max-w-[280px] w-full'>
              <ul className='max-w-[280px] w-full flex justify-between items-center text-NavTxtClr font-myriad'>
                <li className='max-w-[48px] w-full size-[16px] leading-[24px] font-bold'>
                  <a href='#'>Home</a>
                </li>
                <li className='max-w-[73px] w-full size-[16px] leading-[24px] font-bold'>
                  <a href='#'>Category</a>
                </li>
                <li className='max-w-[63px] w-full size-[16px] leading-[24px] font-bold'>
                  <a href='#'>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='max-w-[333px] w-full flex justify-between'>
            <button className='max-w-[214px] w-full h-[44px] rounded-[57px] bg-BtnClr '>
              <span className=' size-[16px] leading-[24px] text-WhiteTxt font-myriad font-semibold'>
                Join the community
              </span>
            </button>
            <div className='max-w-[105px] w-full '>
              <button className='max-w-[105px] w-full h-[44px] flex justify-between items-center'>
                <div className='max-w-[21px] w-full flex '>
                  <img src={VndIcon} alt='vnd_icon' />
                </div>
                <span className='max-w-[34px] w-full size-[16px] leading-[24px]  font-myriad font-medium text-primaryClr'>
                  VND
                </span>
                <div className='max-w-[24px] w-full '>
                  <img src={Arrow} alt='arrow' />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
