import { Card, CardContent, Container } from '@mui/material';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { CustomButton } from '../components/Common';
import { FormOne, FormThree, FormTwo } from '../components/RegisterForm';

const RegisterForm = () => {
  const [sequence, setSequence] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // React Hook Form related & default value
  const methods = useForm({
    defaultValues: {
      email: '',
      name: '',
      gender: '',
      identification_no: '',
      employment_status: '',
      phone_number: '',
      address_1: '',
      address_2: '',
      postcode: '',
      state: '',
      city: '',
    },
  });

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
      registerComponent = <FormThree />;
      break;
    default:
      null;
  }

  // Toggle form pages
  const handleToggleForm = (btnType) => {
    // Next
    if (btnType === 'next') {
      if (sequence !== 3) {
        setSequence((sequence) => sequence + 1);
      }

      if (sequence === 3) {
        alert('This is the last form!');
      }
    }
    // Back
    if (btnType === 'back') {
      if (sequence <= 3 && sequence !== 1) {
        setSequence((sequence) => sequence - 1);
      }
    }
  };

  // Form Submit
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <FormProvider {...methods}>
        <Container fixed>
          <Card>
            <CardContent>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                {registerComponent}
                <CustomButton
                  onClick={() => handleToggleForm('back')}
                  type='button'
                  variant='outlined'
                  text='Back'
                />
                <CustomButton
                  onClick={() => handleToggleForm('next')}
                  type='submit'
                  variant='outlined'
                  text='Next'
                />
              </form>
            </CardContent>
          </Card>
        </Container>
      </FormProvider>
    </>
  );
};

export default RegisterForm;
