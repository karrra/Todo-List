import React from 'react'
import Header from './Header'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <Header />
    <VisibleTodoList />
  </div>
)

export default App