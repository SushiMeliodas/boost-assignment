import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const SelectElement = (props) => {
  const { name, labelText, selectItems, fullWidth, size } = props;
  const { control } = useFormContext();

  return (
    <>
      <FormControl fullWidth={fullWidth} size={size}>
        <InputLabel>{labelText}</InputLabel>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select value={value} onChange={onChange} label={labelText}>
              {selectItems.map((selectItem, index) => {
                return (
                  <MenuItem value={selectItem.val} key={index}>
                    {selectItem.label}
                  </MenuItem>
                );
              })}
            </Select>
          )}
        />
      </FormControl>
    </>
  );
};

export default SelectElement;
