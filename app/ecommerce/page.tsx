import React from 'react'
import Dashboard from '../ui/Commerce/Dashboard'
import Products from '../ui/Commerce/Products'
import Feature from '../ui/Commerce/Feature'
import Discount from '../ui/Commerce/Discount'
import Pricing from '../ui/Commerce/Pricing'
import Settings from '../ui/Commerce/Settings'
import Orders from '../ui/Commerce/Orders'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <section className='xl:w-[70%]  md:w-[90%] w-[95%] mx-auto flex flex-col gap-32'>
        <Dashboard/>
        <Orders/>
        <Products/>
        <Feature/>
        <Discount/>
        <Pricing/>
        
    </section>
    <Settings/>
    </>
    
  )
}

export default page