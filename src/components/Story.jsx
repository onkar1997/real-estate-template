import React from 'react'

const Story = () => {
  return (
    <section className='p-5 flex flex-col gap-4 md:flex-row-reverse max-w-[1200px] mx-auto'>
      <img src="/story-bg.png" className='w-full flex-1 border-white border-8 p-2 max-w-[570px]' alt="story image" />

      <div className='flex-1'>
        <h2>Our Story <br />
          Who We Are
        </h2>

        <p>Established in 1992, PT. Wahana Cipta operates as a General Contracting company with a footprint that we have planted throughout Indonesia. Initially, we focused on construction in the field of residential housing development in Jakarta. As the company grows, now we are present as a reliable....</p>

        <button className="self-start text-base text-white shadow-btn px-3 py-1.5 mt-4 bg-blue-500 rounded-sm">See More</button>
      </div>
    </section>
  )
}

export default Story