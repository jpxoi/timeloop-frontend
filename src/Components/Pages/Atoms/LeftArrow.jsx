import React from 'react'
import {ArrowLeftIcon} from '@heroicons/react/24/outline'

const LeftArrow = ({buttonparams, iconparams}) => {
  return (
    <div>
      <button className={`${buttonparams}`}>
        <ArrowLeftIcon className={`${iconparams}`}/>
      </button>  
    </div>
  )
}

export default LeftArrow