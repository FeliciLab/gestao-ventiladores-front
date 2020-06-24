import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const Photo = ({ src, alt }) => {
  const styleImg = {
    background: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
    <div data-testid="photo-bg-img" style={styleImg}>
      <div data-testid="photo-label" style={styleLabel}>
        <p>{alt}</p>
      </div>
    </div>
  );
};

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const DialogPhoto = ({ open, close, src, alt }) => (
  <Dialog
    open={open}
    onClose={close}
    aria-labelledby="imagem-do-equipamento"
    aria-describedby="imagem-do-equipamento"
    fullWidth
    maxWidth="lg">
    <DialogTitle id="alert-dialog-title">
      <Grid container justify="space-between" alignItems="center">
        <Grid item>{alt}</Grid>
        <Grid item>
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    </DialogTitle>
    <img data-testid="dialog-photo-img" src={src} alt={alt} width="100%" />
  </Dialog>
);

DialogPhoto.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const PhotoModal = ({ src, alt }) => {
  const [open, setOpen] = useState(false);
  if (!src || !alt) {
    throw new Error('props {src|alt} undefined');
  }

  return (
    <>
      <div
        data-testid="photo-modal"
        role="button"
        style={{ height: '100%', width: '100%' }}
        onClick={() => setOpen(true)}
        onKeyPress={() => setOpen(true)}
        tabIndex={0}>
        <Photo src={src} alt={alt} />
      </div>
      <DialogPhoto
        open={open}
        close={() => setOpen(false)}
        src={src}
        alt={alt}
      />
    </>
  );
};

PhotoModal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default PhotoModal;
