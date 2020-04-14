import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const InputFile = (props) => {
  return (
    <React.Fragment>
      <input
        type="file"
        hidden
      />
      <FormControl
        fullWidth
        onClick={() => console.log('teste')}
      >
        <InputLabel htmlFor="standard-adornment-amount">Foto antes da limpeza</InputLabel>
        <Input
          id="standard-adornment-amount"
          endAdornment={<InputAdornment position="end"><AttachFileIcon/></InputAdornment>}
        />
      </FormControl>
    </React.Fragment>
  );
};

export default InputFile;