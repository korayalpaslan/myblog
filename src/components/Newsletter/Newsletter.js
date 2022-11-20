import React,{useState} from 'react'
import Login from './Login';
import Signup from './Signup';

const Newsletter = () => {

    const [membership,setMembership] = useState(false);

    const toggleHandler = () => {
        setMembership(prevState => !prevState)
    }

    return (
        <div className="newsletter">
            <div className="newsletter__container">
                <h4>DÜNYADAN HABERİN VAR MI?</h4>
                <p>Dünyanın dört bir köşesinden derlediğimiz seyahat haberleri burada!</p>
                {!membership && <Login/>}
                {membership && <Signup/>}
                {!membership && <button className="btn-link" onClick={toggleHandler}>Üye Olmak İstiyorum</button>}
            </div>
        </div>
    )
}

export default Newsletter
