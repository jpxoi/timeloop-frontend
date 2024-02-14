import React from 'react'

const Button = ({params, text}) => {
  return (
    <button class={`${params}`}>
      {text}
    </button>
  )
}

export default Button
