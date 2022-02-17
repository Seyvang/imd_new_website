import React from 'react'
import Image from 'next/image'
import test_image from '../public/assets/PI_PA.jpg'

function ProteinCard() {
  return (
    <div>
        <Image
            width={500}
            height={500}
            src={test_image}
            alt='rig1_staining'
        />
    </div>
  )
}

export default ProteinCard