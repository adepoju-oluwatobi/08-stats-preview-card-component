import React from 'react'
import CardImg from '../assets/images/image-header-desktop.jpg'

function StatsPreviewCard() {
  return (
<div className='bg-[#1b1938] w-[240px] h-[100%] rounded-2xl'>
        <div className='relative'>
            <img className='rounded-t-2xl' src={CardImg} alt="card image" />
            <div class="absolute inset-0 bg-overlay opacity-40 rounded-t-2xl"></div>  
        </div>
        

        <div className='p-4 mt-2 text-white'>
            <div>
                <p className='line-height text-[16px] text-center font-bold'>
                    Get <span className='  text-violet-500'>Insight</span> that help your bussiness grow.
                </p>
                <p className='leading-6 mt-2 opacity-60 text-center my-2 text-[10px]'>
                    Discover the benefits of data analytics and make better dicision regarding revenue, customer experience and over all efficiency.
                </p>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center text-center'>
                <div>
                    <p className='font-bold text-[16px]'>
                        10k+
                    </p>
                    <p className='text-[8px] opacity-60'>
                        COMPANIES
                    </p>
                </div>
                <div>
                    <p className='font-bold text-[16px]'>
                        314
                    </p>
                    <p className='text-[8px] opacity-60'>TEMPLATES</p>
                </div>
                <div>
                    <p className='font-bold text-[16px]'>12M+</p>
                    <p className='text-[8px] opacity-60'>QUERIES</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default StatsPreviewCard