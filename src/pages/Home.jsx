import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer"


export const Home = ({setOpen}) => {

    return <div className="min-h-screen container text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        {/* <ThemeToggle/> */}

        {/* Background Effect */}
        <StarBackground />
        {/* Navbar */}
        <Navbar/>


        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection/>
            <ContactSection setOpen={setOpen}/>
        </main>


        {/* Footer */}
        <Footer/>
    </div>;
}