import { Container } from "@mui/material";
import React, { useState } from "react";
import { CustomButton } from "../components/Common";

import { FormOne, FormThree, FormTwo } from "../components/RegisterForm";

const RegisterForm = () => {
  const [sequence, setSequence] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Switch register components
  let registerComponent;
  switch (sequence) {
    case 1:
      registerComponent = <FormOne />;
      break;
    case 2:
      registerComponent = <FormTwo />;
      break;
    case 3:
      registerComponent = <FormThree />;
      break;
    default:
      null;
  }

  // Toggle form pages
  const handleToggleForm = (btnType) => {
    // Next
    if (btnType === "next") {
      if (sequence !== 3) {
        setSequence((sequence) => sequence + 1);
      }

      if (sequence === 3) {
        alert("This is the last form!");
      }
    }
    // Back
    if (btnType === "back") {
      if (sequence <= 3 && sequence !== 1) {
        setSequence((sequence) => sequence - 1);
      }
    }
  };

  return (
    <>
      <Container fixed>
        {registerComponent}
        <CustomButton
          onClick={() => handleToggleForm("back")}
          type="button"
          variant="outlined"
          text="Back"
        />
        <CustomButton
          onClick={() => handleToggleForm("next")}
          type="button"
          variant="outlined"
          text="Next"
        />
      </Container>
    </>
  );
};

export default RegisterForm;
