import client from '../services/client';

export const getAllCalibration = () =>
  client.get('api/calibragem').then((result) => result.data);

export const updateCalibration = (_id, calibration) =>
  client.post(
    'api/calibragem',
    {
      _id,
      status:
        calibration.status === 'descalibrado' ? 'diagnostico' : 'calibragem',
      calibragem: calibration,
      updated_at: new Date(),
    },
    { v1: true },
  );
