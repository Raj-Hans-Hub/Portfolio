
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Career_objecttive from './components/Career_objecttive'
import Skil from './components/Skil'
import Projects from './components/Projects' 
import Eduandcer from './components/Eduandcer'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
    <div className="continer bg-amber-300 overflow-x-hidden">

      <Navbar />
      <Profile/>
      < Career_objecttive/>
       <Skil/>
       <Projects/>
       <Eduandcer/>
       <Footer/>
    </div>
    </>
  )
}

export default App
