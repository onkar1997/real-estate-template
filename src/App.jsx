import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Status from "./components/Status"
import BrandLogo from "./components/BrandLogo"
import Service from "./components/Service"
import Feature from "./components/Feature"
import Team from "./components/Team"
import Story from "./components/Story"
import NewsUpdate from "./components/NewsUpdate"
import Project from "./components/Project"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Status />
        <BrandLogo />
        <Service />
        <Feature />
        <Team />
        <Story />
        <NewsUpdate />
        <Project />
      </main>
      <Footer />
    </>
  )
}

export default App