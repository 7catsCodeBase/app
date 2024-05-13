import ButtonCourse from '@/Components/ButtonCourse';
import CourseCard from '@/Components/CourseCard';
import { Flex, Box } from '@chakra-ui/react';
import React from 'react'

const Courses = () => {
  return (
    <Box width="85%" m="0 auto" pt="10vh" pb="25px">
      <Box pb="25px">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      </Box>
      <Flex justifyContent="center" alignItems="center" >
        <ButtonCourse />
      </Flex>

    </Box>
  )
}

export default Courses;