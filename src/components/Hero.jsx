import {PiWarehouseBold} from 'react-icons/pi'

const Hero = () => {
  return (
    <section className=" bg-gray-800 text-white">
      <div className=" flex flex-col md:flex-row md:items-end md:gap-20 mx-auto md:max-w-[1200px]">
        {/* Hero Text */}
      <div className="flex flex-col pt-10 px-5 gap-2">
          <h1 className="font-medium text-xl md:text-5xl">We Provide <br />
              Architectural design <br />
              and Construction
          </h1>

          <p className="mt-2 max-w-[35rem]">More than 100 buildings and housing projects that we have built. The building owner chose us over other contractors in Mumbai, because our work is different.</p>

          <button className='self-start text-base px-3 py-1.5 mt-4 bg-blue-500 rounded-sm shadow-btn'>Discover More</button>

          <div className="md:flex justify-between my-8 hidden">
            <div className="flex flex-col">
                <h3 className="text-xl font-bold text-white">300+</h3>
                <p>Happy <br /> 
                    Client
                </p>
            </div>
            <div className="flex flex-col">
                <h3 className="text-xl font-bold text-white">900+</h3>
                <p>Amazing <br /> 
                    Projects
                </p>
            </div>
            <div className="flex flex-col">
                <h3 className="text-xl font-bold text-white">20+</h3>
                <p>Award  <br /> 
                    Winnings
                </p>
            </div>
        </div>
      </div>

      <div>
        {/* Hero Image */}
        <div className="flex justify-end -mt-32">
            <picture>
              <source
                media="(min-width: 765px)"
                srcSet="/big_hero_image.png"
              />
              <source 
                media="(max-width: 768px)"
                srcSet="/hero-bg.svg"
              />
              <img src="/hero-bg.svg" className="md:w-[500px]" alt="small hero bg image" />
            </picture>
        </div>

        <section className="bg-blue-500 text-white p-5 flex flex-col gap-2 hidden md:flex">
          <div className="flex justify-between gap-8 items-center">
            <div className="text-xl font-bold">
              <PiWarehouseBold className='text-white text-4xl' />
            </div>
            <div>
                <div className="flex items-baseline">
                    <h2 className="text-3xl text-white font-bold">25</h2>
                    <h2 className="text-lg text-white font-medium ml-1">Years</h2>
                </div>
                <h3 className="text-xl text-white -mt-3">Operated</h3>
            </div>
            <p className="text-sm text-white md:max-w-[400px]">As a trusted general project that has been operating  for 25 years, our commitment is always to prioritize our client satisfaction.</p>
          </div>
        </section>
      </div>
      </div>
      
    </section>
  )
}

export default Hero