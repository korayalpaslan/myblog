import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';


const Login = () => {

    const [enteredEmail,setEnteredEmalil] = useState('');
    const [isValid,setIsValid] = useState(true);

    const history = useHistory();


    const changeInputHandler = (event) =>{
        setEnteredEmalil(event.target.value);
    }

    const loginHandler = (event) => {
        event.preventDefault();
        if(!enteredEmail || !enteredEmail.includes('@')){
            setEnteredEmalil('');
            setIsValid(false);
            return
        }
        console.log(enteredEmail);
        setIsValid(true);
        setEnteredEmalil('');
        history.push("/haberler");
    }
    
    return (
        <form className="newsletter__form" onSubmit={loginHandler}>
            <input className={isValid ? 'valid' : 'non-valid'} type="text" placeholder={isValid ? "E-mail adresinizi yazın" : "Lütfen geçerli bir email giriniz"} value={enteredEmail} onChange={changeInputHandler}/>
            <button className="btn btn-login">GİRİŞ</button>
        </form>
    )
}

export default Login
