import { SkillsInfo } from "../Info";
import SkillsCard from "./SkillsCard";

const Skills = () => {
    return (
        <div className="SkillsContainer" id="Skills">
            <h1>Skills</h1>
            <div data-aos="fade-up" data-aos-duration="800" className="SkillsCard">
                {SkillsInfo.map((skill: any, index: number) => (
                    <SkillsCard key={index} title={skill.title} skills={skill.skills} />
                ))}
            </div>
        </div>
    );
};

export default Skills;