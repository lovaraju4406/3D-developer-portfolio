import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className='relative z-0 bg-primary'>
        {/* Hero Section — light gradient bg replacing dark hero-pattern */}
        <div className='hero-light-bg'>
          <Navbar />
          <Hero />
        </div>

        {/* Main content sections */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        {/* Contact with subtle star particles */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;