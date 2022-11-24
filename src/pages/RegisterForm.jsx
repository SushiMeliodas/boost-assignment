import {
  Card,
  CardContent,
  Container,
  Grid,
  Box,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { CustomButton } from "../components/Common";
import { FormOne, FormThree, FormTwo } from "../components/RegisterForm";
import { isObjEmpty } from "../utils/helper";

// Css
const customCss = {
  mainCard: {
    margin: "auto",
    marginTop: "16px",
    borderRadius: "20px",
    maxWidth: "500px",
  },
  stepper: {
    marginBottom: "15px",
  },
};

// Stepper label
const steps = ["1st Page", "2nd Page", "3rd Page"];

// Yup schema for validation
const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email format.")
    .required("Required email."),
});

const RegisterForm = () => {
  const [sequence, setSequence] = useState(1);
  const [finalResult, setFinalResult] = useState(null);

  // React Hook Form related & default value
  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      name: "",
      martial_status: "",
      gender: "",
      identification_no: "",
      employment_status: "",
      phone_number: "",
      address_1: "",
      address_2: "",
      postcode: "",
      state: "",
      city: "",
    },
  });
  const {
    handleSubmit,
    getValues,
    formState: { errors },
  } = methods;

  // Switch register form components
  let registerComponent;
  switch (sequence) {
    case 1:
      registerComponent = <FormOne />;
      break;
    case 2:
      registerComponent = <FormTwo />;
      break;
    case 3:
      registerComponent = <FormThree finalResult={finalResult} />;
      break;
    default:
      null;
  }

  // Toggle form pages
  const handleToggleBack = () => {
    if (sequence <= 3 && sequence !== 1) {
      setSequence((sequence) => sequence - 1);
    }
  };

  // Form Submit
  const onSubmit = (data) => {
    console.log("Success!", data);
    if (sequence !== 3) {
      if (sequence === 2) {
        setFinalResult(getValues());
      }

      setSequence((sequence) => sequence + 1);
    }

    if (sequence === 3) {
      alert("This is the last form!");
    }
  };

  const onError = (errors, e) => {
    console.log("Fail!", errors);
    // console.log(errors, e);
  };

  return (
    <>
      <FormProvider {...methods}>
        {/* Center components for mobile view */}
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Container fixed>
            {/* Main card */}
            <Card sx={customCss.mainCard}>
              {/* Card body */}
              <CardContent>
                <Box sx={customCss.stepper}>
                  {/* Stepper trigger by sequence */}
                  <Stepper activeStep={sequence - 1} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                  {registerComponent}
                  <Box sx={{ margin: "0", marginTop: "16px" }}>
                    <Grid container>
                      <Grid
                        xs
                        item
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        {sequence !== 1 && (
                          <CustomButton
                            onClick={() => handleToggleBack()}
                            type="button"
                            variant="text"
                            text="Back"
                          />
                        )}
                      </Grid>
                      <Grid
                        xs
                        item
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="center"
                      >
                        <CustomButton
                          type="submit"
                          variant="text"
                          text="Next"
                          disabled={isObjEmpty(errors) ? false : true}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </FormProvider>
    </>
  );
};

export default RegisterForm;
