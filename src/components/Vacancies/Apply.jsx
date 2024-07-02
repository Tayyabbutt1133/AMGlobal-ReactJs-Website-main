import React, { useEffect } from 'react'
import ApplyBackground from "../../assests/Vacancies//pattern.png";
import AOS from "aos";
import "aos/dist/aos.css"; 

function Apply() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      delay: 100,
    });
  }, []);
  return (
    <div className='apply'  data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
        <div 
        style={{backgroundImage:`url(${ApplyBackground})`}}
        className='mainApply'> 
            <div className='hidden lg:block'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 767.81 767.811" width="600px" style={{position: 'absolute', left: '-320px', top: '-140px', zindex:'2'}}><g id="Rectangle_768" data-name="Rectangle 768" transform="translate(767.81 383.905) rotate(135)" fill="none" stroke="#171717" stroke-width="50"><rect width="242.924" height="222.924" rx="40" stroke="none"></rect><rect x="60" y="60" width="322.924" height="322.924" rx="20" fill="#B8A147"></rect></g></svg>
            </div>
            <div> 
            {/* <img src={ApplyBackground} style={{height:'60vh', width:'100%'}} alt="" /> */}
            <div className='applyContent'>
                <div className='heading'>Lorem Ipsum is simply dummy text of thee 1500s</div>
                <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.
                </div>
                <div><button className='classButton'>Apply Directly</button></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Apply