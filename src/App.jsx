import React from "react";
import About from "./Components/About/About";
import WanderlustNavbar from "./Components/Navbar/Navbar";
import Footerbar from "./Components/Footer/Footer";
import Destinations from "./Components/Destinations/Destinations";
import Faq from "./Components/FAQ/faq";
import Banner from "./Components/Banner/Banner";


const App = () => {
  return <>
<WanderlustNavbar />
<Banner />
<About />
<Destinations />
<Faq />

<Footerbar />
   </>;
}
export default App;