import MainNav from "./components/Navigations/MainNav";
import Splash from "./components/Splash";
import Experience from "./components/Experience";
import Skills from "./components/Skills"
import Honors from "./components/Honors";
import Footer from "./components/Footers/Footer";


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
