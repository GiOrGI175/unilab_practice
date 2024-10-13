import React from 'react';
import Logo from '/Logo.svg';

const header = () => {
  return (
    <header className='w-full'>
      <div className='max-w-[1440px] h-[100px] w-full mx-[0px] my-[auto]'>
        <div className='w-full px-[130px]  flex justify-center '>
          <div>
            <img src={Logo} alt='Logo' />
          </div>
          <nav>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
          <div>
            <button></button>
            <div>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
