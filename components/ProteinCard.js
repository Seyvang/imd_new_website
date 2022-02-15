import React from 'react'
import Image from 'next/image'

function ProteinCard() {
  return (
    <div>
        <Image
            width={500}
            height={500}
            src='/../public/assets/PI_PA.jpg'
            alt='rig1_staining'
        />
    </div>
  )
}

export default ProteinCard