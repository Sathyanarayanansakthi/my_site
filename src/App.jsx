import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Skill from './components/Skill';
import Education from "./components/Education";
//import Project from './components/Project';
//import AboutMe from './components/AboutMe';

const App = () => {
  return (
 
<div className="relative min-h-screen w-full bg-slate-950">

 <div>
       <Navbar/>
       <About/>
       <Skill />
       <Education /> 
       <Footer/>
 </div>
 </div>

 
  )
}

export default App
