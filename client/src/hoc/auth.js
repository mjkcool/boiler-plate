import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from './../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null){

    //option: null-아무나출입가능, true-로그인유저만가능, false-로그인하지않은유저만
    function AuthenticationCheck(props){

        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response)
            })
        }, [])

        return(
            <SpecificComponent />
        )
    }

    return AuthenticationCheck
}