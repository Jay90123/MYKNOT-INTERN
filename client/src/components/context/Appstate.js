import React, { useState } from 'react'
import Appcontext from './Appcontext'

const Appstate = (props) => {

   const [overlay,setOverlay]=useState(false)


  return (
    <Appcontext.Provider value={{overlay,setOverlay}}>
        {props.children}
    </Appcontext.Provider>
  )
}

export default Appstate
