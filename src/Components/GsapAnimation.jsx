import React from 'react'
import gsap from 'gsap'

const GsapAnimation = () => {

  let handleAnimate = () => {
    gsap.fromTo(".box", { opacity: 1, x: 0, y: 0, rotation: 0 }, { rotation: 200, x: 1200, opacity: 1, duration: 1 });
    // gsap.from(".header", { duration: 1, y: -100, opacity: 0 });
  }


  gsap.set(".btn", { xPercent: -50, yPercent: -50 });

  let xSetter = gsap.quickSetter(".btn", "x", "px") //apply it to the #id element's x property and append a "px" unit
  let ySetter = gsap.quickSetter(".btn", "y", "px") //apply it to the #id element's x property and append a "px" unit

  window.addEventListener("mousemove", e => {
    xSetter(e.x)
    ySetter(e.y)
  });



  return (
    <div>


      <div className='header h-20 my-5 w-[100%] bg-blue-500'>

      </div>


      <div className='h-[150px] w-[150px] bg-blue-500 box'>Ahamd Nadeem</div>
      <button onClick={handleAnimate} className='bg-blue-500 m-5 px-6 py-2 rounded-lg' id='btn'>Animate</button>
    </div>


  )
}

export default GsapAnimation
