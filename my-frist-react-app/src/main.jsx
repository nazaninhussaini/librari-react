import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Services from './Services.jsx'
import Student from './student.jsx'
import Details from './Details.jsx'
import School from './school.jsx'
import SchoolDetails from './SchoolDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/student' element ={<Student/>}/> 
      <Route path="/student/:name" element={<Details/>}/>
      <Route path='school' element = {<School/>}/>
      <Route path='school/:id' element={<SchoolDetails/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
