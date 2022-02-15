import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
// import axios from 'axios';

function Footer() {
    const [currentText, setCurrentTime] = useState(0);

    return (
        <Container className="d-flex flex-column justify-content-center padding=">
            <footer className='text-center'>Copyright 2022 Steven Kim Contact at stevenskim@outlook.com</footer>
        </Container>
    )
}

export default Footer
