import React from 'react';
import playIcon from '/play_icon.svg';
import rectangleBlue from '/Rectangle_1.png';
import RectangleYelow from '/Rectangle_2.png';

const Main = () => {
  return (
    <main className='w-full  flex h-[595px] rounded-b-[40px] justify-center bg-header-gradient '>
      <div className='max-w-[1440px] h-full w-full flex'>
        <div className='w-full h-full px-[130px]  flex  justify-between items-center'>
          <div className='max-w-[530px] w-full h-full  '>
            <div className=' w-full mt-[80px] flex flex-col'>
              <h1 className=' w-full text-[60px] leading-[68px] font-extrabold text-primaryClr  font-myriad'>
                One more friend
              </h1>
              <span className='text-[46px] leading-[60px] font-bold text-primaryClr  font-myriad'>
                Thousands more fun!
              </span>
            </div>
            <p className='max-w-[510px] w-full text-[16px] leading-[24px] font-medium text-NeutralClr font-myriad mt-[24px]'>
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className='max-w-[345px] w-full mt-[34px] flex justify-between'>
              <button className='w-[167px] h-[48px] px-[28px] border-[1.5px] rounded-[57px] flex justify-between items-center'>
                <span className='text-[16px] leading-[24px] text-BtnClr font-myriad'>
                  View Intro
                </span>
                <div>
                  <img src={playIcon} alt='play_icon' />
                </div>
              </button>
              <button className='w-[163px] h-[48px] px-[28px] bg-NavTxtClr rounded-[57px] flex justify-center items-center'>
                <span className='text-[16px] leading-[24px] text-WhiteTxt font-myriad'>
                  Explore Now
                </span>
              </button>
            </div>
          </div>
          <div className='h-full relative '>
            <div className=' flex items-end absolute  w-[635px] right-[-30px] '>
              <img src={rectangleBlue} alt='rectangleBlue' />
            </div>
            <div className=' flex items-end absolute  w-[635px] right-[-45px] '>
              <img src={RectangleYelow} alt='RectangleYelow  ' />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
