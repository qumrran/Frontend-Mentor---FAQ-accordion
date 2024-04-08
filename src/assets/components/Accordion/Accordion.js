import React, { useState } from 'react';
import images from '../variables/images.js';
import './Accordion.scss';

const Accordion = ({ title, content, IconMinus, IconPlus }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`accordion-container ${isActive ? 'active' : ''}`}>
            <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
                <p className='accordion-question'>{title}</p>
                <span>{isActive ? <img src={images.IconMinus} alt="minus icon" className="accordion-icon-minus" /> : <img src={images.IconPlus} alt="plus icon" className="accordion-icon-plus" />}</span>
            </div>
            {isActive && <div className='accordion-content'>{content}</div>}
        </div>
    );
};

export default Accordion;
