"use client"

import Bills from './ui/Bills/Bills'
import Brand from './ui/Brand/Brand'
import Solution from './ui/Business/Solution'
import Carousel from './ui/Carousel/Carousel'
import Loans from './ui/Loans/Loans'
import Analytics from './ui/Merchant/Analytics'
import Collection from './ui/Merchant/Collection'
import MSolution from './ui/Merchant/MSolution'
import Registration from './ui/Merchant/Registration'
import Payments from './ui/Payments/Payments'

export default function Home() {
  return (
    <main className="">
      <MSolution />
      
      <Carousel />
      <section className='lg:w-5/6 w-[95%] mx-auto container flex items-center gap-16 flex-col'>
      <Brand/>
        <Payments />
        {/* <Bills/> */}
        <Collection />
        <Analytics/>
        <Registration/>
        <Loans />
        <Solution />
     

      </section>




    </main>
  )
}