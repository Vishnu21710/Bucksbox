import React from 'react'
import { ArrowDownCircleIcon, UserCircleIcon } from '@heroicons/react/20/solid'

type Props = {}

const ButtonGroup = (props: Props) => {
  return (
    <div className='flex gap-5 md:my-20 my-10 items-center'>
           <button
    className="px-7 py-3.5 flex gap-3 text-white items-center bg-indigo-600 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2 ring-indigo-600 focus:ring-2"
>
    <ArrowDownCircleIcon className='w-5 h-5'/>
    Downlod
</button>
<button
    className="px-7 py-3.5 text-white flex gap-3 items-center bg-indigo-600 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2 ring-indigo-600 focus:ring-2"
>
    <UserCircleIcon className='w-5 h-5'/>
    Register
</button>
    </div>
  )
}

export default ButtonGroup