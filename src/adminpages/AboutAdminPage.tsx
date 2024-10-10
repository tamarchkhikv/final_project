import React from 'react'

const AboutAdmin = () => {
  return (
    <div className='max-w-[749px] mx-auto h-[1005px] relative '>
      <div className='h-[200px] bg-[#0E1422]'>
        <img src='/images/star.png' className='absolute top-[72px] left-[72px]' />
        <img src='/images/avatar.png' className='absolute top-[107px] right-[88px]' />

      </div>
      <div className='mt-20 ml-[72px]'>
        <h1 className='font-extrabold text-2xl text-[#0E1422]'>DevCut's Ecommerce</h1>
        <p className='mt-6 w-[418px] h-[75px]'>Hey there 👋 I'm Ali Norouzi!
          Software developer since 2019, Passionate about crafting user experiences
          and transforming ideas into polished products.</p>

        <div className='flex mt-6 gap-2'>
          <h2 className='font-bold text-sm text-[#27364B]'>For inquiries:</h2>
          <a className='font-normal text-sm text-[#202533]'> anorouzi.work@gmail.com</a>
        </div>
        <div className='flex mt-4 gap-2'>
          <h2 className='font-bold text-sm text-[#27364B]'>Live Website:</h2>
          <a className='font-normal text-sm text-[#202533]'> ecommerce.anorouzi.com</a>
        </div>
        <div className='flex mt-4 gap-2'>
          <h2 className='font-bold text-sm text-[#27364B]'>Live Admin: </h2>
          <a className='font-normal text-sm text-[#202533]'> ecommerce-admin.anorouzi.com</a>
        </div>



      </div>

      <img src='/images/coffee-button.png' className='mt-8 ml-[72px]' />

      <div className=' flex items-center justify-center w-[749px] h-[104px] border-t-[1px] border-[#E2E8F0] absolute bottom-0'>
        <div className='flex gap-[41px] '>
          <div className='flex gap-3'>
            <img src='/images/globe.svg' />
            <a>anorouzi.com</a>
          </div>
          <div className='flex  gap-3'>
            <img src='/images/linkedin.svg' />
            <a>anorouzii</a>
          </div>
          <div className='flex  gap-3 '>
            <img src='/images/figma.svg' />
            <a>anorouzi</a>
          </div>


        </div>

      </div>

    </div>
  )
}

export default AboutAdmin