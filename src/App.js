import React from 'react';
import './App.css';
import Introduction from './Components/Introduction';
import WorkDone from './Components/WorkDone';
import Skills from './Components/Skills';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    <div>
      {/* <!-- Nav --> */}
			<nav id="nav">
				<ul className="container">
					<li><a href="#top">Introduction</a></li>
					<li><a href="#work">Skills</a></li>
					<li><a href="#portfolio">Portfolio</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>

      <Introduction />
      <WorkDone />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
