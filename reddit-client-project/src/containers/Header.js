import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRedditAlien} from '@fortawesome/free-brands-svg-icons';



const Header = () => {
    return (
        <div className="">
            <div className="App-logo">
                
                <h1>{<FontAwesomeIcon icon={faRedditAlien} />}Reddit<span>Minimal</span></h1>
            </div>
        </div>
    )
};

export default Header;