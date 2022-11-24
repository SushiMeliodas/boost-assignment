import { Box, Stack } from "@mui/material";
import React from "react";
import HookFormControl from "../ReactHookForm/HookFormControl";

const FormTwo = () => {
  return (
    <>
      <Stack spacing={2}>
        <HookFormControl
          control="input"
          name="phone_number"
          labelText="Phone Number"
          fullWidth
          size="small"
          type="number"
        />
        <HookFormControl
          control="input"
          name="address_1"
          labelText="Address 1"
          fullWidth
          size="small"
        />
        <HookFormControl
          control="input"
          name="address_2"
          labelText="Address 2"
          fullWidth
          size="small"
        />
        <HookFormControl
          control="input"
          name="postcode"
          labelText="Postcode"
          fullWidth
          size="small"
          type="number"
        />
        <HookFormControl
          control="input"
          name="state"
          labelText="State"
          fullWidth
          size="small"
        />
        <HookFormControl
          control="input"
          name="city"
          labelText="City"
          fullWidth
          size="small"
        />
      </Stack>
    </>
  );
};

export default FormTwo;
