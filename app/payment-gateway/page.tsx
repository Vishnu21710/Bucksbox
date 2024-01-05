import React from 'react'
import PGHero from '../ui/PGI/PGHero'
import PGFeatures from '../ui/PGI/PGFeatures'
import UPI from '../ui/PGI/UPI'
import CreditCard from '../ui/PGI/CreditCard'
import PGEmi from '../ui/PGI/PGEmi'
import PGDevelopers from '../ui/PGI/PGDevelopers'
import PGSecurity from '../ui/PGI/PGSecurity'
import PGServices from '../ui/PGI/PGServices'
import PGCharges from '../ui/PGI/PGCharges'
import PGSlider from '../ui/PGI/PGSlider'

type Props = {}

const page = (props: Props) => {
  return (
    <section className='xl:w-[70%]  md:w-[90%] w-[95%] mt-10 mx-auto flex flex-col gap-32'>
      <PGHero/>
      <PGFeatures/>
      <PGSlider/>     
      <PGEmi/>
      <PGSecurity/>
      <PGDevelopers/>
      <PGServices/>
      <PGCharges/>
    </section>
  )
}

export default page