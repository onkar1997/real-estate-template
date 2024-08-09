import React from 'react'

const NewsUpdate = () => {
  return (
    <section className='p-5 max-w-[1200px] mx-auto'>
        <h2>News & Update</h2>

        <div className='flex gap-5 mt-4 overflow-x-auto'>
            <div className="flex flex-col gap-2 min-w-[15.625rem]">
                <div>
                    <img className="shadow-md md:w-[370px]" src="/news/news1.png" alt="news image1" />
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col">
                        <p className='font-semibold text-2xl leading-none text-color-800'>05</p>
                        <p className='font-semibold text-base text-center text-color-800'>Nov</p>
                    </div>
                    <h4 className='font-semibold text-md md:text-lg'>Elements of Content in Epoxy Paint</h4>
                </div>
                <p>Epoxy paint and epoxy floor contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type of resin... <span className='text-blue-400'>Read more</span></p>
            </div>

            <div className="flex flex-col gap-2 min-w-[15.625rem]">
                <div>
                    <img className="shadow-md md:w-[370px]" src="/news/news2.png" alt="news image2" />
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col">
                        <p className='font-semibold text-2xl leading-none text-color-800'>05</p>
                        <p className='font-semibold text-base text-center text-color-800'>Nov</p>
                    </div>
                    <h4 className='font-semibold text-md md:text-lg'>5 Right Steps in Warehouse Planning and Construction</h4>
                </div>
                <p>Planning the construction of a warehouse for both industrial, personal and other goods storage must be done carefully. When the planning is done properly, the construction is... <span className='text-blue-400'>Read more</span></p>
            </div>

            <div className="flex flex-col gap-2 min-w-[15.625rem]">
                <div>
                    <img className="shadow-md md:w-[370px]" src="/news/news3.png" alt="news image3" />
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col">
                        <p className='font-semibold text-2xl leading-none text-color-800'>05</p>
                        <p className='font-semibold text-base text-center text-color-800'>Nov</p>
                    </div>
                    <h4 className='font-semibold text-md md:text-lg'>The Right Solution to Build a Sturdy Type 45 House</h4>
                </div>
                <p>Having a solid home is certainly everyone'  s dream. How not, the house is a place where the residents can rest and take shelter from the bad weather... <span className='text-blue-400'>Read more</span></p>
            </div>
        </div>
    </section>
  )
}

export default NewsUpdate