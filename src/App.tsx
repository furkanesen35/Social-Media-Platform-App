import './globals.css'
import { Route, Routes } from 'react-router-dom'

export default function App() {
 return (
  <main className='flex h-screen'>
   <Routes>
    {/* public routes */}
    <Route path='/sign-in' element={<SigninForm/>} />

    {/* private routes */}
    <Route index element={<Home/>} />
   </Routes>
  </main>
 )
}