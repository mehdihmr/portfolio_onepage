import About from "./about/about";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import Header from "./header/header";
import Home from "./home/home";
import Projects from "./projects/projects";
import Skills from "./skills/skills";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
