import MainNav from "./components/Navigation/MainNav";
import Splash from "./components/Splash";
import Experience from "./components/Experience";
import Skills from "./components/Skills"
import Honors from "./components/Honors";
import Footer from "./components/Footer"


export default function Home() {
  return (
    <div>
      <MainNav/>
      <Splash/>
      <Experience/>
      <Skills/>
      <Honors/> 
      <Footer/>
    </div>
  );
}
