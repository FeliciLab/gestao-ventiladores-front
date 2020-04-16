import React, {createRef, useState} from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import imageResize from "../../../services/imageResize";

const InputFileImage = (props) => {

  const [filename, setFilename] = useState('');
  const {action, label, accept, name} = props;
  const inputFileRef = createRef();

  const activateInputFile = () => {
    inputFileRef.current.click();
  };

  const captureFile = (event) => {
    event.preventDefault()
    const file = inputFileRef.current.files[0];
    imageResize(file)
      .then(result => {
        action(result['blob'], name);
      });

    setFilename(file.name);

  };

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

export default InputFileImage;