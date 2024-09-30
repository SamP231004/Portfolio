import { useState } from "react";
import Typewriter from "typewriter-effect";
import { Info } from "../Info";
import { useDisclosure } from "@mantine/hooks";
import Resume from "./Resume";
import Particles from "./magicui/Particles";

const About = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <div className="about">
                <Particles className="particles-bg" quantity={750} ease={80} vx={.1} vy={.1} color="#64ffda" refresh />
                <div className="aboutText">
                    <div id="text1">Hi, I am</div>
                    <div id="text2">Samarth Patel</div>
                    <div className="info">
                        <span id="stack"><Typewriter options={{ strings: Info.stack, autoStart: true, loop: true }} /></span>
                    </div>
                    <br />
                    <div id="text4">{Info.bio}</div>
                    <button onClick={open}>Check Resume</button>
                </div>
                <div className="myImage">
                    <img src="https://avatars.githubusercontent.com/u/142706204?s=400&u=b3c8475886140f835b78c2b9da47bbc0cde0b840&v=4" alt="Samarth Patel" />
                </div>
            </div>
            <Resume opened={opened} close={close} />
        </>
    );
};

export default About;