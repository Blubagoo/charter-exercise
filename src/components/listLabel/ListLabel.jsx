import React from 'react'

const ListLabel = ({width, label}) => {
  return (
    <div className="label" style={{width}}><span>{label}</span></div>
  )
}

export default ListLabel
