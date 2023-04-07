import React from 'react'

function Bio(props) {
  return (
    <div>
        <h1>{props.bio}</h1>
        {props.children}
    </div>
  )
}

export default Bio