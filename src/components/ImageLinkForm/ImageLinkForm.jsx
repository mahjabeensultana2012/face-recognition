import React from 'react';

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">
        {'This magic face will detect faces in your picture. Get a try'}
      </p>
      <div className="center">
        <div className="pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" />
          <button className="f4 w-30 grow link ph3 pv2 dib white bg-light-purple">
            {' '}
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
