import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Photo = ({ src, alt }) => {
  const styleImg = {
    background: `url(${src})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  };

  const styleLabel = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '15px',
    color: 'white',
    width: '100%',
    textAlign: 'left',
  };

  return (
    <>
      <div style={styleImg}>
        <div style={styleLabel}>
          <p>{alt}</p>
        </div>
      </div>
    </>
  );
};
Photo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const PhotoModal = ({ src, alt }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        role="button"
        style={{ height: '100%', width: '100%' }}
        onClick={() => setOpen(true)}
        onKeyPress={() => setOpen(true)}
        tabIndex={0}>
        <Photo src={src} alt={alt} />
      </div>
    </>
  );
};

PhotoModal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default PhotoModal;
