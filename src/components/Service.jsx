const Service = () => {
  return (
    <section className="bg-gray-100 ">
        <div className="max-w-[1200px] p-5 mx-auto mt-10">
            <div className="flex flex-col gap-2 text-center md:flex-row md:justify-between md:items-end">
                <h2 className="md:text-start">Our Excellent<br />
                    Services
                </h2>

                <p className="md:max-w-[500px] md:text-justify md:leading-7">Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services.</p>
            </div>

            <div className="flex gap-5 overflow-x-auto mt-4 md:mt-10">
                <div className="flex flex-col gap-2 min-w-[16.25rem]">
                    <div className="flex flex-col gap-3">
                        <div>
                            <img className="shadow-md md:w-[370px] md:h-[290px]" src="/services/service1.png" alt="service1 image" />
                        </div>
                        <h3>Industrial</h3>
                        <p>Industrial development is our main line of business. We do Factory Construction, Warehouse and others.</p>
                    </div>
                </div>
                
                <div className="flex flex-col gap-2 min-w-[16.25rem]">
                    <div className="flex flex-col gap-3">
                        <div>
                            <img className="shadow-md md:w-[370px] md:h-[290px]" src="/services/service2.png" alt="service2 image" />
                        </div>
                        <h3>Commercial</h3>
                        <p>Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 min-w-[16.25rem]">
                    <div className="flex flex-col gap-3">
                        <div>
                            <img className="shadow-md md:w-[370px] md:h-[290px]" src="/services/service3.png" alt="service2 image" />
                        </div>
                        <h3>Residential</h3>
                        <p>Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service