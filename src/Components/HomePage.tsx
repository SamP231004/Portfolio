import { Anchor } from "@mantine/core";
import Header from "./Header";
import Social from "./Social";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
    return (
        <>
            <Toaster/>
            <Header/>
            <About/>
            <Project/>
            <Skills/>
            <Contact/>
            <Footer/>
            <Social/>
        </>
    )
}
export default HomePage;