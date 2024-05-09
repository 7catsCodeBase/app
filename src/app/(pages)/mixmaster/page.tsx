"use client"
import React from 'react';
import MixMasterHero from "@/Components/MixMasterHero";
import { Box } from '@chakra-ui/react';
import MixMasterTable from '@/Components/MixMasterTable';
import DragAndDrop from '@/Components/DragAndDrop';



const MixMasterPage = () => {
  return (
    <Box mb="5vh">
      <MixMasterHero />
      <DragAndDrop />
    </Box>
  )
}

export default MixMasterPage;