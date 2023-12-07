import { useState } from 'react';

const SignupStatePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const onChangeEmail = (e) =>{
    setEmail(e.target.value);
  }

  const onChangePassword = (e) =>{
    setPassword(e.target.value);
  }

  const onClickSignup = (e) => {

    //1. 검증하기
    if(email.includes("@") === false) {
      //alert("이메일이 올바르지 않습니다.");
      setEmailError("이메일이 올바르지 않습니다.");
    }
    else{
      //2. 백엔드 컴퓨터에 보내주기(API)
  
      //3. 성공 알람 보여주기
      alert("회원가입을 축하합니다.");

    }

  }

  return (
    <div>
      이메일 : <input type="text" onChange={onChangeEmail}/>
      <div>{emailError}</div>
      비밀번호 : <input type="password" onChange={onChangePassword}/>
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  )
}

export default SignupStatePage;
