import ContactNav from "../../components/Navigations/ContactNav";
import Contact from "../../components/Contact";
import FixedFooter from "@/app/components/Footers/FixedFooter";

export default function Home() {
  return (
    <div>
      <ContactNav/>
      <Contact/>
      <FixedFooter/>
    </div>
  );
}