import { Box, Stack, Typography, Grid, Divider } from '@mui/material';
import React from 'react';

// Css
const customCss = {
  resultTag: {
    marginLeft: '55px',
    minHeight: '320px',
  },
};

const FormThree = (props) => {
  const { finalResult } = props;

  return (
    <>
      <Box sx={customCss.resultTag}>
        <pre>{JSON.stringify(finalResult, null, 4)}</pre>
      </Box>
    </>
  );
};

export default FormThree;
