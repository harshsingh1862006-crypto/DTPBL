import React from 'react'
function hello(props) {

  return (
    <div id='map' class = {props.Map} style={{backgroundPositionX: props.x , backgroundPositionY: props.y , backgroundSize: props.zoom}}>
      
    </div>
  )
}

export default hello


