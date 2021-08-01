import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from './../../../_actions/user_action'
import { withRouter } from 'react-router-dom'

function RegisterPage(props) {
    const dispatch = useDispatch()

    const [Name, setName] = useState("")
    const [Lastname, setLastname] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onComfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onLastnameHandler = (event) => {
        setLastname(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        if(Password !== ConfirmPassword){
            return alert("비밀번호 확인이 다릅니다.")
        }

        let body = {
            name: Name,
            email: Email,
            password: Password,
            lastname: Lastname
        }

        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.registSuccess){ //회원가입 성공
                    alert("회원가입 성공")
                    props.history.push('/') //페이지 이동
                }else{ //회원가입 실패
                    alert("회원가입 실패")
                }
            })
        
    }

    return (
        <div 
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh'}}>
            <form onSubmit={onSubmitHandler}
                style={{display: 'flex', flexDirection: 'column'}}>
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />
                <label>Last name</label>
                <input type="text" value={Lastname} onChange={onLastnameHandler} />
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onComfirmPasswordHandler} />
                <br/>
                <button>
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
