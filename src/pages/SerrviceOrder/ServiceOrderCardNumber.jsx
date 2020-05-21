import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';


const PercentChip = (props) => {
  const {
    percent,
    bgColor,
    color,
  } = props;

  const ColorChip = withStyles(() => ({
    root: {
      color,
      backgroundColor: bgColor,
      borderRadius: '20px',
      fontSize: 20,
    },
  }))(Chip);

  return <ColorChip label={`${percent}%`} />;
};

PercentChip.propTypes = {
  percent: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const ServiceOrderCardNumber = (props) => {
  const {
    title,
    number,
    percent,
    icon,
    colorIcon,
    bgIcon,
    chipColor,
    bgChipColor,
  } = props;
  return (
    <>
      <Card>
        <CardHeader title={title} />
        <CardContent>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <Grid container justify="space-between">
                <Grid item>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Typography variant="h3">
                        <strong>{number}</strong>
                      </Typography>
                    </Grid>
                    <Grid item style={{ marginLeft: '5px' }}>
                      <PercentChip
                        bgColor={bgChipColor}
                        color={chipColor}
                        percent={percent}
                      />
                    </Grid>
                  </Grid>

                </Grid>
                <Grid
                  item
                >
                  <div
                    style={{
                      backgroundColor: bgIcon || green[900],
                      color: colorIcon || 'white',
                      padding: '10px',
                    }}
                  >
                    {icon}
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

ServiceOrderCardNumber.defaultProps = {
  bgIcon: green[900],
  colorIcon: 'white',
  bgChipColor: green[100],
  chipColor: green[800],
  icon: <AccountBalanceIcon fontSize="large" />,
};

ServiceOrderCardNumber.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  icon: PropTypes.instanceOf(Object),
  colorIcon: PropTypes.string,
  bgIcon: PropTypes.string,
  chipColor: PropTypes.string,
  bgChipColor: PropTypes.string,
};

export default ServiceOrderCardNumber;
