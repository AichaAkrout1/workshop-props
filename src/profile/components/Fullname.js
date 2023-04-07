import React from 'react'

function Fullname({FullName, handleName}) {
  return (
    <div>
        
        <h1>{FullName}</h1>
        <div>
            <button onClick={() =>handleName("Hello")} style={{height:'50px',
            backgroundColor:'brown',
            color:'white',
            borderRadius:'30px',
            border:'1px solid brown',
        
        }}>
            Click here to show name of the profile user</button>
        </div>
    </div>
  )
}

export default Fullname