import React from 'react'
import {Container} from 'react-bootstrap'
// import youtube_background from '../youtube_background.jpeg'
import styles from './TopPic.module.css'
function TopPic() {
    
    return (
        <Container className="d-flex align-items-center" style={{backgroundColor: 'black', width: '100vw', height: '80vh', backgroundPosition: 'center' }}>
            <div className={styles.box}>
                <h1 className='display-1 text-center text-white'>Institute of Metabolic Disorders</h1>
            </div>
        </Container>
    )
}
// 
export default TopPic
