const Feature = () => {
  return (
    <section className="p-5 max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-2 ">
            <div className="h-1 w-[90px] bg-blue-500" />

            <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end">
                <h2>What Make Us <br /> Different?</h2>

                <p className="md:max-w-[560px]">Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services.</p>
            </div>

            <div className="mt-10 flex flex-col md:flex-row md:justify-between items-center text-center gap-2">
                <div className="flex flex-col items-center gap-2 max-w-[14.625rem] md:h-[370px]">
                    <div>
                        <img src="/features/feature1.png" alt="feature1 image" />
                    </div>
                    <h3 className="mt-1">Experienced</h3>
                    <p>Our experience of 25 years of building and making achievements in the world of development.</p>
                </div>
                
                <div className="flex flex-col items-center gap-2 max-w-[14.625rem] md:h-[370px]">
                    <div>
                        <img src="/features/feature2.png" alt="feature2 image" />
                    </div>
                    <h3 className="mt-1">Competitve Price</h3>
                    <p>The prices we offer you are very competitive without reducing the quality of the company's work in the slightest.</p>
                </div>

                <div className="flex flex-col items-center gap-2 max-w-[14.625rem] md:h-[370px]">
                    <div>
                        <img src="/features/feature3.png" alt="feature3 image" />
                    </div>
                    <h3 className="mt-1">On Time</h3>
                    <p>We prioritize the quality of our work and finish it on time</p>
                </div>

                <div className="flex flex-col items-center gap-2 max-w-[14.625rem] md:h-[370px]">
                    <div>
                        <img src="/features/feature4.png" alt="feature4 image" />
                    </div>
                    <h3 className="mt-1">Best Materials</h3>
                    <p>The material determines the building itself so we recommend that you use the best & quality materials in its class.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feature