import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin,faGitSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'


function Footer() {
  return (
    
    <div className='footer'>
    <ul className='smedia-icons'>
        <li><a href="https://twitter.com/epixieme" target="_blank"><FontAwesomeIcon icon={faTwitter} size="3x"/></a></li>
        <li><a href="https://www.linkedin.com/in/kirstiehayes/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a></li>
        <li><a href="https://github.com/epixieme" target="_blank"><FontAwesomeIcon icon={faGitSquare} size="3x"/></a></li>
        <li><a href="mailto:kirstie.l.hayes@googlemail.com"><FontAwesomeIcon icon={faEnvelope} size="3x"/></a></li>
    </ul>
    </div>
  );
}

export default Footer;
