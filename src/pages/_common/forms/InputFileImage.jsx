import React, { createRef, useState } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import imageResize from '../../../services/imageResize';

const InputFileImage = (props) => {
  const { action, label, accept, name } = props;

  const [filename, setFilename] = useState('');
  const inputFileRef = createRef();

  const activateInputFile = () => {
    // LOADING
    inputFileRef.current.click();
  };

  const captureFile = (event) => {
    event.preventDefault();
    const file = inputFileRef.current.files[0];
    imageResize({ file, fullImage: true }).then((result) => {
      action(result.blob, name);
    });

    setFilename(file.name);
  };

  return (
    <>
      <input
        accept={accept || 'image/*'}
        onChange={captureFile}
        ref={inputFileRef}
        type="file"
        hidden
      />
      <FormControl fullWidth onClick={activateInputFile}>
        <InputLabel htmlFor="standard-adornment-amount">{label}</InputLabel>
        <Input
          value={filename}
          endAdornment={
            <InputAdornment position="end">
              <AttachFileIcon />
            </InputAdornment>
          }
          readOnly
        />
      </FormControl>
    </>
  );
};

InputFileImage.defaultProps = {
  accept: 'image/*',
  name: 'Input file',
};

InputFileImage.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  accept: PropTypes.string,
  name: PropTypes.string,
};

export default InputFileImage;
