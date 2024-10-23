import ProjectsNav from "../../components/Navigations/ProjectsNav";
import FixedFooter from "@/app/components/Footers/FixedFooter";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
    <div>
      <ProjectsNav/>
      <Projects/>
      <FixedFooter/>
    </div>
  );
}