import SideBar from "./SideBar";

const links = ["About", "Work", "Skills", "Contact"];
const navlinks = () => {
    return links.map((link) => {
        return <a href={`#${link}`} key={link}>{link}</a>
    })
}

const Header = () => {
    return (
        <nav>
            <h1>Portfolio</h1>
            <div>
                {navlinks()}
            </div>
            {/* <SideBar/> */}
        </nav>
    )
};
export default Header;