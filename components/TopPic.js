import React from 'react'
import {Container} from 'react-bootstrap'
// import youtube_background from '../youtube_background.jpeg'
import styles from './TopPic.module.css'
import campus from '../public/assets/IMD_campus.jpg'
import Image from 'next/image'
// style={{width: '100vw', height: '80vh', backgroundPosition: 'center' }}
function TopPic() {
    // backgroundImg: 'black', 
    return (
        
        <Container className="d-flex align-items-center" style={{width: '100vw', height: '80vh',position: 'relative' }}>
            <Image
                // width={1000}
                // height={300}
                placeholder='blur'
                layout="fill"
                src={campus}
                objectFit='cover'
                alt="campus picture"
                quality={60}
                className={styles.backgroundImg}
            />
            <div className={styles.box}>
                <h1 className='display-1 text-center text-white'>Institute of Metabolic Disorders</h1>
            </div>
            
            
        </Container>
    )
}
// 
export default TopPic
