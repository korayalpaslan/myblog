import React,{useState} from "react";
import { Link } from "react-router-dom";

const Headline = () => {

  const [isToggle, setIsToggle] = useState(false);

  

  return (
    <div className="headline wrapper">
      <Link to="/" className="text-no-decoration headline__title">
        <h3 className="text-center">ÇOK GEZENLER KULUBÜ</h3>
      </Link>
      <div className={isToggle ? 'hamburger toggle' : 'hamburger'} onClick={()=> setIsToggle(prevState => !prevState)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Headline;
