"use client"
import { Button } from '@chakra-ui/react';
import React from 'react';

import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const customTheme = extendTheme({
  components: {
    Button: {
      variants: {
        black: {
          bg: 'black', // Set background color to black
          color: 'white', // Set text color to white for better contrast
        },
      },
      defaultProps: {
        variant: 'black', // Set the default variant to 'black'
      },
    },
  },
});

const ButtonCourse = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Button size='lg'>Continue</Button> </ChakraProvider>
  )
}

export default ButtonCourse;