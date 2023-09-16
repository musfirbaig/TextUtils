import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
        {props.alert.msg}
</div>
  )
}
