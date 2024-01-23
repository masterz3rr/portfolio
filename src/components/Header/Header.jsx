import React from 'react'
import { Link} from 'react-router-dom'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './header.css'

import { images } from '../../constants'

const navigation = [
  { name: 'About', to: "/about"},
  { name: 'Projects', to: "/projects" },
  { name: 'Workspace', to: "/workspace" }
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
      <Disclosure as="nav" className="bg-transparent">
        {({ open }) => (
          <div className='fixed w-full backdrop-blur-md z-10'>
            <div className="container mx-auto px-2 md:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hamburger">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link  to={"/"}><img src={images.logo} alt="" className="h-10 w-auto"/></Link> 
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">

                      <Link className="px-6 py-4 text-sm font-medium navTitle" to="/about">About</Link>
                      <Link className="px-6 py-4 text-sm font-medium navTitle" to="/projects">Projects</Link>
                      <Link className="px-6 py-4 text-sm font-medium navTitle" to="/workspace">Workspace</Link>
                                          
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div onClick={
                  () => {
                    toggleTheme()
                  }
                  }>
                  {
                    theme === "light" ? (

                      <img className='h-5 w-auto cursor-pointer' src={images.light} alt="html" />
                    ) : (
                      <img className='h-5 w-auto cursor-pointer' src={images.dark} alt="html" />
                    )
                  }
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="backdrop-blur-lg min-h-screen flex items-center justify-center">
                <div className="text-center">
                {navigation.map((item) => (
                <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.to}
                    className={classNames(
                     'block my-14 px-3 py-2 text-base font-medium link-mobile border border-1 hover:text-red-700'
                    )}
                    
                >
                    {item.name}
                </Disclosure.Button>
                ))}
                </div>
              </div>
          </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
  )
}

export default Header