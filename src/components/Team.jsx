const Team = () => {
  return (
    <section className="p-5 max-w-[1200px] mx-auto lg:flex">
        <div className="bg-[url('/teams/teams-bg.png')] h-[340px] bg-no-repeat bg-cover flex justify-center items-end flex-1 lg:mr-40 lg:flex-col lg:justify-center lg:h-[500px]">
            <div className="bg-gray-800 relative w-[260px] h-[260px] flex flex-col items-center gap-2 top-16 lg:top-0 lg:-right-24 p-5 rounded-sm">
                <div>
                    <img src="/teams/teams-avatar.png" alt="avatar image" />
                </div>
                <h3 className="text-white">Lara Russell</h3>
                <p className="text-center">More than 20 years of experience in the fieldarchitecture and has worked on project up to 100+.</p>
            </div>
        </div>

        <div className="flex flex-col gap-2 flex-1 lg:justify-center">
            <h2>Meet and Talk with <br />
                our Best Architecture
            </h2>
            <p>All our teams are professional and competent in their fields and will help you realize your dream building with the excellent result.</p>

            <div className="flex justify-between lg:justify-start lg:gap-10">
                <button className="text-base text-white shadow-btn px-3 py-1.5 mt-4 bg-blue-500 rounded-sm">See all team</button>

                <button className="flex items-center gap-2">
                    <h4 className="font-semibold">How it works</h4>
                    <img src="/teams/right-arrow-icon.svg" alt="right arrow image" />
                </button>
            </div>
        </div>
    </section>
  )
}

export default Team