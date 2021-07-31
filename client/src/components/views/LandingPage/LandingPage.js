import React, { useEffect } from 'react'
import axios from 'axios'

function LandingPage() {

    useEffect(() => {
        axios.get('/api/hello') //get request: 포트가 같아야함
        .then(response => console.log(response))
    }, [])


    return (
        <div 
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh'}}
        >
            <h1>시작 페이지</h1>
        </div>
    )
}

export default LandingPage
