import instance from "./api"

export const signUp = data => instance.post(`registration/` , data)

export const getUsers = () => instance.get(`registration/`)

export const signIn = data => instance.post(`login/` , data)


export const createTodo = (data ) => instance.post(`todos/create/` , data  , {headers:{'Authorization': `Token ${localStorage.getItem('userToken')}`}})

export const getAllTodos = () => instance.get(`todos/` , {headers:{'Authorization': `Token ${localStorage.getItem('userToken')}`}})

// export const getSingleTodo = (id) => instance.get(`todos/${id}/` , {headers:{'Authorization': `Bearer ${localStorage.getItem('userToken')}`}})

export const editTodo = (id, data) => instance.put(`todos/${id}/`, data , {
  headers:{
    'Authorization' : `Token ${localStorage.getItem('userToken')}`
  }} )

export const deleteTodo = (id) => instance.delete(`todos/${id}/` , {headers:{'Authorization': `Token ${localStorage.getItem('userToken')}`}})




export const completedTodo = (id) => instance.get(`todos/${id}/completed/` , {headers:{'Authorization': `Token ${localStorage.getItem('userToken')}`}})
