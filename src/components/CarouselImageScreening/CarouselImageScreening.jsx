import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';
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
    height: '75vh',
  },
}));

const CarouselImageScreening = (props) => {
  const { item, open, close } = props;

  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const tutorialSteps =
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

  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="imagem-do-equipamento"
      aria-describedby="imagem-do-equipamento"
      fullWidth
      maxWidth="xl">
      {tutorialSteps.length === 0 ? (
        <></>
      ) : (
        <div>
          <Paper square elevation={0} className={classes.header}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography>{tutorialSteps[activeStep].label}</Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={close}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
          <Grid container justify="center" className={classes.content}>
            <Grid item>
              <a
                href={tutorialSteps[activeStep].imgPath}
                rel="noopener noreferrer"
                target="_blank">
                <img
                  className={classes.img}
                  src={tutorialSteps[activeStep].imgPath}
                  alt={tutorialSteps[activeStep].label}
                />
              </a>
            </Grid>
          </Grid>

          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
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
