import { ErrorMessage } from "@hookform/error-message";
import { TextField, Box } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

// Css
const customCss = {
  errorMessage: {
    color: "red",
  },
};

const InputElement = (props) => {
  const { name, labelText, fullWidth, size } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextField
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            label={labelText}
            fullWidth={fullWidth}
            size={size}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <Box sx={customCss.errorMessage}>{message}</Box>
        )}
      />
    </>
  );
};

export default InputElement;
