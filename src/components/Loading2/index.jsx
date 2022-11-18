import React from 'react'
import cls from './Loader2.module.scss'

const Loading2 = () => {
  return (
    <div className={cls['lds-ring']}><div></div><div></div><div></div><div></div></div>
  )
}

export default Loading2