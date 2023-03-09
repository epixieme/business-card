import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'


function Footer() {
  return (
    
    <div className='footer'>
    <ul className='smedia-icons'>
        <li><FontAwesomeIcon icon={faTwitter} size="3x"/></li>
        <li><FontAwesomeIcon icon={faLinkedin} size="3x"/></li>
        <li><FontAwesomeIcon icon={faFacebook} size="3x"/></li>
        <li><a href="mailto:kirstie.l.hayes@googlemail.com"><FontAwesomeIcon icon={faEnvelope} size="3x"/></a></li>
    </ul>
    </div>
  );
}

export default Footer;
