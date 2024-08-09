const Status = () => {
  return (
    <section className="bg-blue-500 text-white p-5 flex flex-col gap-2 md:hidden">
        <div className="flex justify-between">
            <div>
                <div className="flex items-baseline">
                    <h2 className="text-3xl text-white font-bold">25</h2>
                    <h2 className="text-lg text-white font-medium ml-1">Years</h2>
                </div>
                <h3 className="text-xl text-white -mt-3">Operated</h3>
            </div>
            <div className="text-xl font-bold">Logo</div>
        </div>

        <p className="text-sm">As a trusted general project that has been operating  for 25 years, our commitment is always to prioritize our client satisfaction.</p>

        <div className="flex justify-between">
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
    </section>
  )
}

export default Status