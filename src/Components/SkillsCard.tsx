import { Avatar } from "@mantine/core"

const SkillsBadge = (skills:[]) => {
    return (
        skills.map((skill:any, index:number) => 
        <div className="IconContainer" key={index}> 
            <Avatar variant="transparent" radius="xs" src={`Images_Used/${skill}.png`}/>
            <div>{skill}</div>
        </div>)
    )
}

const SkillsCard = (props:any) => {
    return (
        <div data-aos="zoom-in-up" data-aos-duration="1500" className="SkillsBadgeContainer">
            <div className="SkillsTitle">{props.title}</div>
            <div className="SkillsBadge">{SkillsBadge(props.skills)}</div>
        </div>
    )
}
export default SkillsCard