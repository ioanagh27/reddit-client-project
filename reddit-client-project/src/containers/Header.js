import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRedditAlien} from '@fortawesome/free-brands-svg-icons';



const Header = () => {
    return (
        <div className="fixed header">
            <div className="container centre">
                <FontAwesomeIcon icon={faRedditAlien} />
                <h1>Reddit<span>Minimal</span></h1>
            </div>
        </div>
    )
};

export default Header;