import React, { useState } from 'react'
// import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { loginUser } from './../../../_actions/user_action'
import { withRouter } from 'react-router-dom'

function LoginPage(props) {
    const dispatch = useDispatch()

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body)) //call reducer
        .then(response => {
            if(response.payload.loginSuccess){ //로그인 성공
                alert("로그인 성공")
                props.history.push('/') //페이지 이동
            }else{ //로그인 실패
                alert("로그인 실패")
            }
        })
        
    }

    return (
        <div 
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh'}}>
            <form onSubmit={onSubmitHandler}
                style={{display: 'flex', flexDirection: 'column'}}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br/>
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)