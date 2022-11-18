import React, { useEffect, useState } from 'react'
import { completedTodo } from '../config'

const useComplete = (id) => {
    const [isLoading, setIsLoading] = useState(false)
    
    const changeComlete = () => {
        setIsLoading(true)
        return completedTodo(id)
    }


  return {
    isLoading,
    setIsLoading,
    changeComlete
  }
}

export default useComplete