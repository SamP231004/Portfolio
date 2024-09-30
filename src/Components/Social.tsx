import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, icons } from '@tabler/icons-react';
import { link } from 'fs';

const socialLinks = [
    {link:"https://github.com/SamP231004", icon:IconBrandGithub}, 
    {link:"https://www.linkedin.com/in/samp2310", icon:IconBrandLinkedin},
    {link:"https://www.instagram.com/s_a_m.a_r_t_h", icon:IconBrandInstagram},
]   
const socialIcons = socialLinks.map((socialLink) => {
    return <a href={`${socialLink.link}`} target="_blank"><socialLink.icon stroke={2}/></a>
})

const Social = () => {
    return (
        <>
            <div className="mail">
                <a href="mailto:samp231004@gmail.com">samp231004@gmail.com</a>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" className="social">
                {socialIcons}
            </div>
        </>
    );
};

export default Social;