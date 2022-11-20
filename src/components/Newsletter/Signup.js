import React from 'react'

const Signup = () => {
    return (
        <form className="newsletter__signup"> 
            <input type="text" placeholder="Adı - Soyadı"/>
            <input type="email" placeholder="E-mail"/>
            <button className="btn btn-signup">ÜYE OL</button>
        </form>
    )
}

export default Signup
