import { Button } from "@mui/material";
import React from "react";

const CustomButton = (props) => {
  const { text, variant, type, ...rest } = props;

  return (
    <>
      <Button variant={variant} type={type ? type : "button"} {...rest}>
        {text ? text : "Text Button"}
      </Button>
    </>
  );
};

export default CustomButton;
