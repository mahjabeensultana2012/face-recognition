import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ handleChange, handleSubmit }) => {
  return (
    <div>
      <p className="f3">
        {'This magic face will detect faces in your picture. Get a try!!!'}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={handleChange}
          />
          <button
            className="f4 w-30 grow link ph3 pv2 dib white bg-light-purple"
            onClick={handleSubmit}
          >
            {' '}
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
