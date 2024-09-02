import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { PiLinkBold } from "react-icons/pi";
import { Context } from '../../main';


const Footer = () => {
  const { isAuthorised } = useContext(Context);

  return (
    <>
      <footer className={isAuthorised ? "footerShow" : "footerHide"}>
        <div>&copy; All Rights Reserved By Rohit</div>
        <div>
          <Link
            to={"https://portfolio-rohit-kumar.netlify.app/"}
            target="_blank"
          >
            <PiLinkBold />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/rohit-kumar-225937258/"}
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link to={"https://github.com/rohitkumar57"} target="_blank">
            <FaGithub />
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer
