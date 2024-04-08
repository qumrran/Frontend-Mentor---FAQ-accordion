import React from 'react';
import './Questions.scss';
import images from '../variables/images.js';
import Accordion from '../Accordion/Accordion.js';

const Questions = ({ FAQs }) => {
  return (
    <div className="listContainer">
      {FAQs.map((item, index) => (
        <Accordion
          key={index}
          title={item.question}
          content={<p className="listContainer__answer">{item.answer}</p>}
        />
      ))}
    </div>
  );
};

export default Questions;
