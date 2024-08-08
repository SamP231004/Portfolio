import ProjectCard from "./ProjectCard"
import { ProjectInfo } from "../Info"

const Project = () => {
    return (
        <div className="ProjectContainer" id="Work">
            <h1>Projects</h1>
            <div data-aos="fade-up" data-aos-duration="800" className="Project">
                {ProjectInfo.map((Project:any, index:number) => <ProjectCard key={index} title = {Project.title} info = {Project.info} image = {Project.image} live = {Project.live} tech = {Project.tech} link = {Project.link} github = {Project.github}/>)}
            </div>
        </div>
    )
}
export default Project