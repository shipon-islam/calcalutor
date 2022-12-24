import React from 'react'

import { services } from '../../apis'
import Heading from '../Heading'
import ServiceCard from '../ServiceCard'
export default function Services() {
  return (
    <div className='py-20 md:py-0 font-Poppins '>
        <Heading title="services" subTitle="which iam able?"/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 mt-14'>
          {
            services.map((service)=><React.Fragment key={service.id}>
              <ServiceCard {...service}/>
            </React.Fragment>)
          }
                       
        </div>
    </div>
  )
}
