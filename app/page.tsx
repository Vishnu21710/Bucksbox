"use client"

import GridList from './components/GridList'
import Bills from './ui/Bills/Bills'
import Brand from './ui/Brand/Brand'
import Solution from './ui/Business/Solution'
import Carousel from './ui/Carousel/Carousel'
import Loans from './ui/Loans/Loans'
import Analytics from './ui/Merchant/Analytics'
import Collection from './ui/Merchant/Collection'
import MSolution from './ui/Merchant/MSolution'
import PGI from './ui/Merchant/PGI'
import Registration from './ui/Merchant/Registration'
import Transaction from './ui/Merchant/Transaction'
import Payments from './ui/Payments/Payments'

export default function Home() {
  return (
    <main className="">
      <div className='lg:w-[70%] md:w-[80%] w-[95%] mx-auto'>
      <MSolution />
      </div>
      
      <Carousel />
      <section className='lg:w-[70%] md:w-[80%] w-[95%] mx-auto flex flex-col gap-32'>
      <Brand/>
        <Payments />
        {/* <Bills/> */}
        <Collection />
        <Analytics/>
        <Transaction/>
        <Registration/>
        <Loans />
        <Solution />
        <PGI/>

      </section>




    </main>
  )
}