import React from 'react'
import {useDrag} from "react-dnd"

const DraggableItem = ( {children}) => {
    const [,drag]=useDrag(()=>({
        type:'item',
        item:{text:children},

    }))
  return (
    <div ref={drag}>{children}</div>
  )
}

export default DraggableItem