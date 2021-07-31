import React, { useEffect } from 'react'
import axios from 'axios'

function LandingPage() {
    useEffect(() => {
        axios.get('/api/hello') //get request: 포트가 같아야함
        .then(response => console.log(response))
    }, [])


    return (
        <div>
            LandingPage
        </div>
    )
}

export default LandingPage
