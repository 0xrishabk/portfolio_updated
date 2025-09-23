import { FaGithub, FaInstagram, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import './Contact.css'

function Contact() {
  return (
    <div className="contact-list">
      <a href="https://instagram.com/__rishhhabbk" target="_blank"><FaInstagram /></a>
      <a href="https://github.com/0xrishabk" target="_blank"><FaGithub/></a>
      <a href="https://www.linkedin.com/in/rishab-karki-a2b139329/" target="_blank"><FaLinkedinIn/></a>
      <a href="https://discord.com/users/510811205598969856" target="_blank"><FaDiscord/></a>
    </div>
  )
}

export default Contact;