import MainNav from "./components/Navigations/MainNav";
import Splash from "./components/Splash";
import Experience from "./components/Experience";
import Skills from "./components/Skills"
import Honors from "./components/Honors";
import Footer from "./components/Footers/Footer";

export interface Person {
  first: String;
  middle: String;
  last: String;
}

const identity: Person = {
  first: "ERIC",
  middle: "HUY",
  last: "NGUYEN",
}

export default function Home() {
  return (
    <div>
      <MainNav identity={identity}/>
      <Splash/>
      <Experience/>
      <Skills/>
      <Honors/> 
      <Footer/>
    </div>
  );
}
