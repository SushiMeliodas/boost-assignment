import { Box, Stack } from "@mui/material";
import React from "react";
import HookFormControl from "../ReactHookForm/HookFormControl";

const maritalStatusData = [
  { label: "Married", val: "married" },
  { label: "Single", val: "single" },
  { label: "Widowed ", val: "widowed" },
];

const genderData = [
  { label: "Male", val: "male" },
  { label: "Female", val: "female" },
];

const FormOne = () => {
  return (
    <>
      <Stack spacing={2}>
        <HookFormControl
          control="input"
          name="email"
          labelText="Email"
          fullWidth
          size="small"
        />
        <HookFormControl
          control="input"
          name="name"
          labelText="Name "
          fullWidth
          size="small"
        />
        <HookFormControl
          control="select"
          name="martial_status"
          selectItems={maritalStatusData}
          labelText="Martial Status"
          fullWidth
          size="small"
        />
        <HookFormControl
          control="select"
          name="gender"
          selectItems={genderData}
          labelText="Gender"
          fullWidth
          size="small"
        />
        <HookFormControl
          control="input"
          name="identification_no"
          labelText="Identification No"
          fullWidth
          size="small"
          type="number"
        />
        <HookFormControl
          control="input"
          name="employment_status"
          labelText="Employment Status"
          fullWidth
          size="small"
        />
      </Stack>
    </>
  );
};

export default FormOne;
