import React from 'react';
import simple from "../../../public/assets/simple.png";
import valentine from "../../../public/assets/valentine.png";
import shield from "../../../public/assets/shield.png";

function Value() {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>The value that holds us true and to account</h1>

      <div className='grid gap-[10rem] grid-cols-3 items-center'>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>

          <div className='flex items-center gap-3'>

            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={simple} alt="Simplicity" className='w-[70%]'/>
            </div>
            
            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>

          </div>

          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Things being made beautiful simple are at the heart of everything we do.
          </p>

        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]'>

          <div className='flex items-center gap-3'>

            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={valentine} alt="Valentine" className='w-[70%]'/>
            </div>
            
            <span className='font-semibold text-textColor text-[18px]'>
              Caring
            </span>

          </div>

          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            We believe in making things better for everyone, even if just by a little bit!
          </p>

        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>

          <div className='flex items-center gap-3'>

            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={shield} alt="Trust" className='w-[70%]'/>
            </div>
            
            <span className='font-semibold text-textColor text-[18px]'>
              Trust
            </span>

          </div>

          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            We work on the basis of creating trust which can be nurtured through authenticity and transparency.
          </p>

        </div>

      </div>

      <div className="card mt-[2rem] relative flex justify-between p-[5rem] rounded-[10px] hover:bg-slate-100">
    <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: `url('../../../public/assets/testimonialBg.png')`,
            backgroundPosition: 'center 30%',
            opacity: 0.5, // Set your desired opacity here
        }}
    ></div>
    <div className="relative z-10"> {/* This div holds the content */}
        <h1 className='text-blueColor text-[30px] font-bold'>Ready to switch a career ??</h1>
        <h2 className='text-textColor text-[25px] font-bold'>Let's get Started!</h2>
    </div>

    <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-slate-100 border-blueColor z-10'>
        Get Started
    </button>
</div>

      
    </div>
  );
}

export default Value;
