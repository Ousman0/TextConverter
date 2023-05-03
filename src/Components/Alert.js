import React from 'react'

export default function Alert(props) {
  return (
    props.alert&&<div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.msg}</strong>: {props.alert.typ}
   
  </div>
  )
}