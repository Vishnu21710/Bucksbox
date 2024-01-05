import React from 'react'

type Props = {}

const Pricing = (props: Props) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-white">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Pricing
        </p>
      </div>
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-purple-600 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
              width="52"
              height="24"
            />
          </svg>
          <span className="relative">The</span>
        </span>{' '}
        Empower Your Business with Custom Product Pricing!
      </h2>
      <p className="text-base text-gray-700 md:text-lg">
      Set custom prices for your products, putting you in control of your offerings. Enhance flexibility, maximize profits, and create a pricing strategy that suits your business goals seamlessly.
      </p>
    </div>
    <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
      <div className="duration-300 transform bg-white border-l-4 border-indigo-600 hover:-translate-y-2">
        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
          <h6 className="mb-2 font-semibold leading-5">Sale</h6>
          <p className="text-sm text-gray-900">
          Customize Pricing for Sales and Maximize Customer Delight!
          </p>
        </div>
      </div>
      <div className="duration-300 transform bg-white border-l-4 border-indigo-600 hover:-translate-y-2">
        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
          <h6 className="mb-2 font-semibold leading-5">Override Existing Price</h6>
          <p className="text-sm text-gray-900">
          Effortlessly Override Existing Prices for Optimal Control!
          </p>
        </div>
      </div>
      <div className="duration-300 transform bg-white border-l-4 border-indigo-600 hover:-translate-y-2">
        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
          <h6 className="mb-2 font-semibold leading-5">
            Customer Groups
          </h6>
          <p className="text-sm text-gray-900">
          Tailor Your Products with Custom Pricing for Specific Customer Groups
          </p>
        </div>
      </div>
      <div className="duration-300 transform bg-white border-l-4 border-indigo-600 hover:-translate-y-2">
        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
          <h6 className="mb-2 font-semibold leading-5">Pricing Precision</h6>
          <p className="text-sm text-gray-900">
          Utilize our Advanced Pricing Table to Organize and Sort Your Pricing Strategies with Effortless Precision!
          </p>
        </div>
      </div>
    </div>
    <div className="text-center">
      <a
        href="/"
        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md md:w-auto bg-green-500 text-white  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
      >
        Contact Us
      </a>
    </div>
  </div>
  )
}

export default Pricing