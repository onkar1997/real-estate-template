import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { PiWarehouseBold } from "react-icons/pi";

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Services', href: '#', current: false },
  { name: 'Find A Team', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
  { name: 'Articles', href: '#', current: false },
  { name: 'Portfolio', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Nav = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <MdMenu aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <RxCross1 aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className='ml-12 md:ml-8'>
            <PiWarehouseBold className='text-white text-4xl' />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end pt-5">
            <div className="flex flex-shrink-0 items-center">
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 md:text-md text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Nav