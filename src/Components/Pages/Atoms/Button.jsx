import React from 'react'

const Button = ({params, text}) => {
  return (
    <div>
        <button class={`${params}`}>
          {text}
        </button>
    </div>
  )
}

export default Button