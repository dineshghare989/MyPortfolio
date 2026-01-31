
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyles from './GlobalStyles';


//<GlobalStyles/>;
//<Navbar/>;


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

//<Hero containerVariants ={containerVariants} itemVariants ={itemVariants}/>;
//<About  containerVariants={containerVariants} itemVariants={itemVariants}/>;
//<Skills/>;
//<Projects/>;
//<Contact containerVariants={containerVariants} itemVariants={itemVariants}/>;
//<Footer/>;


// --- MAIN APP ---
const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* <GlobalStyles />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}

      <GlobalStyles/>
      <Navbar/>
      <Hero containerVariants ={containerVariants} itemVariants ={itemVariants}/>
      <About  containerVariants={containerVariants} itemVariants={itemVariants}/>
      <Skills/>
      <Projects/>
      <Contact containerVariants={containerVariants} itemVariants={itemVariants}/>
      <Footer/>
    </div>
  );
};

export default App;