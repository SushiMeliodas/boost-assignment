import React from "react";
import InputElement from "./InputElement";
import SelectElement from "./SelectElement";

const HookFormControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <InputElement {...rest} />;
    case "select":
      return <SelectElement {...rest} />;
    default:
      null;
  }
};

export default HookFormControl;
