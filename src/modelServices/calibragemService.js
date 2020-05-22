import api from '../services/api';


export const getAllCalibration = () => api.get('api/calibragem')
  .then((result) => result.data);

export const updateCalibration = (_id, calibration) => api.post(
  'api/calibragem',
  {
    _id,
    status: 'calibragem',
    calibragem: calibration,
  },
);
