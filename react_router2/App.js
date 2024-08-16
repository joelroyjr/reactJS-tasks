import './App.css'
import React from 'react'
import { Menu } from './Components/Menu'
import 'bootstrap/dist/css/bootstrap.css'
import { Task1 } from './Components/Task1'
import { Task2 } from './Components/Task2'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <h1>Hello World</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Task1/>}/>
        <Route path='/task2' element={<Task2/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}
export default App