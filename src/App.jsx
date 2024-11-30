import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Skill from './components/Skill';
import Education from "./components/Education";
import Project from './components/Project';

const App = () => {
  return (
 
<div className="relative w-full min-h-screen bg-slate-950">

 <div>
       <Navbar/>
       <About/>
       <Skill />
       <Project />
       <Education /> 
     
       <Footer/>
 </div>
 </div>

 
  )
}

export default App
