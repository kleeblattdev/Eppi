//library import
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//component import
import Table from './assets/components/Table'
import Header from './assets/components/Header'
import SignUp from './assets/components/SignUp';

//
import { Toaster } from "@/components/ui/toaster"

//css import
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Table/>}/>
      <Route path='/signUp' element= {<SignUp/>}/>
    </Routes>
    <Toaster/>
    </BrowserRouter>
    </>
  )
}

export default App
