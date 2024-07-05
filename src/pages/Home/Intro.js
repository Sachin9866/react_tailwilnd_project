import React from 'react'

function Intro() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center my-6'> Who am I </h1>
      <div className='flex justify-center pt-8 '>
        <div className='h-[400px] w-[400px] bg-black rounded-full flex justify-center items-center  '>

          <div className='text-white p-10'>
            <p>Name : sachin rajak</p>
            <p>Email: sachindrayadav880@gmail.com</p>
            <p>Tel:977777</p>
            <p>Age:22</p>
            <p>Experience:python, java, dart</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
