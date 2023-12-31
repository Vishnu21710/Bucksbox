import React from 'react'
import { CheckBadgeIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

type Props = {}

const features = [
    {
      name: 'Real Time PAN Verification',
      description:
        'Elevate security with Real-Time PAN Verification. Confirm identities instantly for a seamless user experience.',
      icon: CheckBadgeIcon,
    },
    {
      name: 'Real Time Aadhar Verification',
      description: 'Boost security with Real-Time Aadhar Verification. Instantly confirm identities for a seamless user experience.',
      icon: CheckBadgeIcon,
    },
    {
      name: 'Real Time Bank Verification',
      description: 'Enhance security with Real-Time Bank Verification. Swiftly confirm accounts for a seamless user experience.',
      icon: CheckBadgeIcon,
    },
    {
      name: "SwiftSignup: Fast and Easy Registration Made Simple",
      icon: CheckBadgeIcon
    }
  ]

const Registration = (props: Props) => {
  return (
    <div className="overflow-hidden bg-purple-50 my-10 py-10 ">
      <div className="mx-auto  lg:px-8">
        <div className="mx-auto grid  grid-cols-1 place-items-center  gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0  lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 ">
            <div className="w-full ">
              <h2 className="text-base font-semibold leading-7 text-green-600 max-sm:text-center">Merchant onboarding</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 xl:text-6xl lg:text-4xl max-sm:text-center">Registration Redefined: <span className='text-purple-600'>Easy, Quick</span>, and User-Centric</p>
             
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9 xl:text-lg text-md">
                    <dt className="inline  text-gray-900">
                      <feature.icon className="absolute  left-1 top-1 h-7 w-7 text-green-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="reg.png"
            alt="Product screenshot"
            className="xl:max-w-[500px] lg:max-w-[400px]  rounded-xl  md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

export default Registration