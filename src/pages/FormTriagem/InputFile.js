import React, {createRef, useState} from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const InputFile = (props) => {

  const [filename, setFilename] = useState('');
  const {action, label, accept} = props;
  const inputFileRef = createRef();

  const activateInputFile = () => {
    inputFileRef.current.click()
  }

  const captureFile = () => {
    const file = inputFileRef.current.files[0]
    setFilename(file.name)
    action(file)
  }

  return (
    <React.Fragment>
      <input
        accept={accept || 'image/*'}
        onChange={captureFile}
        ref={inputFileRef}
        type="file"
        hidden
      />
      <FormControl
        fullWidth
        onClick={activateInputFile}
      >
        <InputLabel htmlFor="standard-adornment-amount">{label}</InputLabel>
        <Input
          value={filename}
          endAdornment={<InputAdornment position="end"><AttachFileIcon/></InputAdornment>}
          readOnly
        />
      </FormControl>
    </React.Fragment>
  );
};

export default InputFile;