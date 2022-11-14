import React from 'react'
import cls from './Loader.module.scss'

const Loading = () => {
  return (
    <div className={cls.pulse}></div>
  )
}

export default Loading