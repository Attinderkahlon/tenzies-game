import React from 'react'

export default function Die(props) {
  return (
    <div className={props.isHeld === true ? 'die-green' : 'die-face'}>
      <h2 className='die-num' onClick={props.hold}>
        {props.value}
      </h2>
    </div>
  )
}
