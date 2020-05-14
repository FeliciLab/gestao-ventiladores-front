import api from '../services/api';


export function getAllCalibration () {
  return api.get('api/calibragem')
    .then(result => {
      console.log(result.data)
      return result.data
    })
}

export function updateCalibration (_id, calibration) {
  return api.post(
    'api/calibragem',
    {
      _id,
      status: 'calibragem',
      calibragem: calibration
    }
  )
}