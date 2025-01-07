import React from 'react'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/Signup'
import SignIn from './pages/SIgnin'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}/>





    </Routes>
    
    </BrowserRouter>
  )
}

export default App