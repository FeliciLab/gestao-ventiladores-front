import React from 'react';
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

  const ColorChip = withStyles((theme) => ({
    root: {
      color: color || green[800],
      backgroundColor: bgColor || green[100],
      borderRadius: '20px',
      fontSize: 20,
    },
  }))(Chip);

  return <React.Fragment>
    <ColorChip label={`${percent}%`} />
  </React.Fragment>;
};

export default function ServiceOrderCardNumber(props) {
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
  return (<React.Fragment>
    <Card>
      <CardHeader
        title={title}
      />
      <CardContent>
        <Grid container spacing={4} alignItems={'center'}>
          <Grid item xs={12}>
            <Grid container justify={'space-between'}>
              <Grid item>
                <Grid container alignItems={'center'}>
                  <Grid item>
                    <Typography variant={'h3'}>
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
                  style={ {
                    backgroundColor: bgIcon || green[900],
                    color: colorIcon || 'white',
                    padding: '10px',
                  } }
                >
                  {icon || <AccountBalanceIcon fontSize={'large'} />}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </React.Fragment>);
}
