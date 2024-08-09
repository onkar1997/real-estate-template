import {PiWarehouseBold} from 'react-icons/pi'

const Footer = () => {
  return (
    <footer className="p-5 bg-gray-800 mt-10">
        <div className="max-w-[1200px] p-10 py-10 md:flex md:gap-[140px] mx-auto">
            <div className="flex flex-col gap-4 max-w-[550px]">
                <div className='flex items-center gap-5'>
                    <PiWarehouseBold className='text-white text-4xl' />
                    <h2 className="text-white">
                    Real Estate
                </h2>
                </div>
                <p>is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out Indonesia's development.</p>
                <div className="flex gap-4">
                    <img src="/social-icons/logo1.svg" className="hover:cursor-pointer hover:bg-gray-700 hover:rounded-full" alt="twitter icon" />
                    <img src="/social-icons/logo2.svg" className="hover:cursor-pointer hover:bg-gray-700 hover:rounded-full" alt="instagram icon" />
                    <img src="/social-icons/logo3.svg" className="hover:cursor-pointer hover:bg-gray-700 hover:rounded-full" alt="google icon" />
                    <img src="/social-icons/logo4.svg" className="hover:cursor-pointer hover:bg-gray-700 hover:rounded-full" alt="linkedin icon" />
                </div>
            </div>

            <div className="flex gap-8 mt-10">
                <div className="flex flex-col">
                    <h4 className="text-lg font-semibold text-white">Company</h4>
                    <p className="mt-8 text-md hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent">About</p>
                    <p className="mt-4 text-md hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent">How It Works</p>
                    <p className="mt-4 text-md hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent">Term</p>
                    <p className="mt-4 text-md hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent">Privacy Policy</p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-white">More</h4>
                    <p className="mt-8 text-md hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent">Documentation</p>
                    <p className="mt-4 text-md hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent">License</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer