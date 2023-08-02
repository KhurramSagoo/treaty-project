import React from 'react'
import Nav from './components/Nav.jsx'
import NavBar from './components/NavBar.jsx';
import photo1 from './assets/photo1.png';
import photo2 from './assets/photo2.png';
import photo3 from './assets/photo3.png';
import YourCarousel from './components/YourCarousel.jsx';
import Icons from './components/Icons.jsx';
import MidSection from './components/MidSection.jsx';
import Contact from './components/Contact.jsx';
function App() {
  const data = [
    {
      id: 1,
      title: "slide 1",
      path: photo1,
      overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolore. lorem",
    },
    {
      id: 2,
      title: "slide 2",
      path: photo2,
      overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolore.dolor",
    },
    {
      id: 3,
      title: "slide 3",
      path: photo3,
      overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolore.dolor ",
    },
  ];
  return (
   <>
<NavBar />
<YourCarousel data={data}/>
<Icons />
<MidSection />
<Contact /> </>
  );
}

export default App;
