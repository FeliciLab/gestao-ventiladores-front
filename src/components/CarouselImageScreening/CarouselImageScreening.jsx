import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { baseImageURI } from '../../utils/serviceOrderUtils';
import placeholderImg from '../../assets/placeholderImg.jpg';
import CircularProgress from '@material-ui/core/CircularProgress';

const PaperHeader = ({ photosSteps, activeStep, classes, close }) => (
  <Paper square elevation={0} className={classes.header}>
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <Typography>{photosSteps[activeStep].label}</Typography>
      </Grid>
      <Grid item>
        <IconButton onClick={close}>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  </Paper>
);
PaperHeader.propTypes = {
  photosSteps: PropTypes.instanceOf(Array).isRequired,
  activeStep: PropTypes.number.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  close: PropTypes.func.isRequired,
};

const PhotoContent = ({ photosSteps, activeStep, classes }) => {
  const [srcImg, setSrcImg] = useState(false);
  useEffect(() => {
    axios
      .get(photosSteps[activeStep].imgPath)
      .then(() => setSrcImg(photosSteps[activeStep].imgPath))
      .catch(() => setSrcImg(placeholderImg));
  }, [activeStep]);

  return (
    <Grid container justify="center" className={classes.content}>
      <Grid item>
        {!srcImg ? (
          <CircularProgress />
        ) : (
          <a
            href={photosSteps[activeStep].imgPath}
            rel="noopener noreferrer"
            target="_blank">
            <img
              className={classes.img}
              src={srcImg}
              alt={photosSteps[activeStep].label}
            />
          </a>
        )}
      </Grid>
    </Grid>
  );
};
PhotoContent.propTypes = {
  photosSteps: PropTypes.instanceOf(Array).isRequired,
  activeStep: PropTypes.number.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
};

const PhotoStepper = ({ maxSteps, activeStep, setNextStep, setPrevStep }) => (
  <MobileStepper
    steps={maxSteps}
    position="static"
    variant="text"
    activeStep={activeStep}
    nextButton={
      <Button
        size="small"
        onClick={setNextStep}
        disabled={activeStep === maxSteps - 1}
        aria-label="próxima-imagem">
        Próxima
        <KeyboardArrowRight />
      </Button>
    }
    backButton={
      <Button
        size="small"
        onClick={setPrevStep}
        disabled={activeStep === 0}
        aria-label="imagem-anterior">
        <KeyboardArrowLeft />
        Anterior
      </Button>
    }
  />
);
PhotoStepper.propTypes = {
  maxSteps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  setNextStep: PropTypes.func.isRequired,
  setPrevStep: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  content: {
    backgroundColor: theme.palette.background.default,
  },
  img: {
    display: 'block',
    height: '70vh',
  },
}));

const CarouselImageScreening = (props) => {
  const { item, open, close } = props;

  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);

  const photosSteps =
    item && item._id
      ? [
          {
            label: 'Foto antes da limpeza',
            imgPath: `${baseImageURI(item)}/foto_antes_limpeza.jpeg`,
          },
          {
            label: 'Foto após da limpeza',
            imgPath: `${baseImageURI(item)}/foto_apos_limpeza.jpeg`,
          },
        ]
      : [];

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="imagem-do-equipamento"
      aria-describedby="imagem-do-equipamento"
      fullWidth
      maxWidth="xl">
      {photosSteps.length && (
        <div data-testid="photo-dialog-stepper">
          <PaperHeader
            activeStep={activeStep}
            close={close}
            photosSteps={photosSteps}
            classes={classes}
          />

          <PhotoContent
            activeStep={activeStep}
            photosSteps={photosSteps}
            classes={classes}
          />

          <PhotoStepper
            activeStep={activeStep}
            maxSteps={photosSteps.length}
            setNextStep={() =>
              setActiveStep((prevActiveStep) => prevActiveStep + 1)
            }
            setPrevStep={() =>
              setActiveStep((prevActiveStep) => prevActiveStep - 1)
            }
          />
        </div>
      )}
    </Dialog>
  );
};

CarouselImageScreening.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default CarouselImageScreening;
