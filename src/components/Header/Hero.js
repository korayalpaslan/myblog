import React from "react";
import HeroBox from './HeroBox';


const DUMMY_DATA = [
  {title:'DENEYİMLER',subtitle:'Yeni deneyimleri keşfetmenin tam zamanı',button:'KEŞFET'},{title:'ŞEHİRLER',subtitle:'Uzak rotalar haritada kalmasın',button:'KEŞFET'},
  {title:'ÜLKELER',subtitle:'Bilmediğin sokaklarda kaybolmak için...',button:'KEŞFET'}
]

const Hero = () => {

  return (
      <>
    <div className="hero">
      <h6 className="hero__heading">Dünyaya Başka Yerden Bak</h6>
    </div>
    <ul className="hero__boxes">
        {DUMMY_DATA.map((item,index) => {
            return <HeroBox key={index} item={item} ></HeroBox>
        })}
      </ul>
    </>
  );
};

export default Hero;
