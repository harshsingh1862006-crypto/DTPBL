import React from 'react'
export default function Navbar(prop) {
  return (
    <>
        <div id='Nav'>
            <button className='Navbtn' onClick={prop.btn1}>Ground Floor</button>
            <button className='Navbtn' onClick={prop.btn2}>1st Floor</button>
            <button className="Navbtn" onClick={prop.btn3}>2nd Floor</button>
            <button className="Navbtn" onClick={prop.btn4}>Clear Search</button>
        </div>
    </>
  )
}
