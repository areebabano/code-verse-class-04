import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <div>
    {/* <img src='' alt='' height={} width={}/> in HTML  */}
    <Image
       src="/bank.jpeg"
       alt='Bank'
       width={200}
       height={200}
      />
    </div>
  )
}

export default HeroSection