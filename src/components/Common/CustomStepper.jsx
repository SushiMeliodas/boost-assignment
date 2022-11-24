import { Stepper, Step, StepLabel, Typography } from '@mui/material';
import React from 'react';

const CustomStepper = (props) => {
  const { steps, activeStep } = props;

  return (
    <>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              <Typography variant='overline'>{label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default CustomStepper;
