/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { PhoneArrowDownLeftIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Dashboard() {
  return (
    <div className="">
      <div className="relative overflow-hidden">


        <div className="relative pt-6 pb-16 sm:pb-24">


          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-700 sm:text-5xl md:text-6xl">
                <span className="block max-w-full">Ready to amplify your business through Bucksbox-Commerce?</span>
                <span className="block text-purple-600 ">Elevate your brand to new heights!</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Discover the unparalleled power of BucksCommerce platform and elevate your brand to new heights!"
              </p>
            </div>
          </div>
        </div>

        <div className="relative">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
            {/* <img
              className="relative rounded-lg shadow-lg"
              src="dashboards.png"
              alt="App screenshot"
            /> */}
            <figure className="ms-auto me-20 relative z-[1] w-full h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
              <div className="relative flex items-center  bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-gray-700">
                <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
                  <span className="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600" />
                  <span className="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600" />
                  <span className="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600" />
                </div>
                <div className="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-gray-600 dark:text-gray-400">
                  www.bucksbox-admin.com
                </div>
              </div>
              <div className="bg-gray-800 rounded-b-lg">
                <img
                  className="max-w-full h-auto max-sm:h-[250px] rounded-b-lg"
                  src="dash.png"
                  alt="Image Description"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>

    </div>
  )
}
