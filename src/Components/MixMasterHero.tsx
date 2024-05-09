"use client"
import { Box, Image, Text } from "@chakra-ui/react";
import { staticAssets } from "@/Utills/staticAssets";

export default function MixMasterHero() {
  return (
    <Box bgColor="white" pt="10vh">
      <Box w="100%" h="30vh" position="relative" >
        <Image
          src={staticAssets.hero2}
          alt="hero-1"
          w="100%"
          h="100%"
          objectFit="cover"
          zIndex="-1"
          __css={{
            filter: " blur(0.5px) contrast(80%) ",
          }}
        />
        <Text
          position="absolute"
          top="50%"
          left="50%"
          fontSize={{ base: "2xl", md: "3xl" , lg:"5xl" }}
          fontWeight="600"
          color="white"
          transform="translate(-50%, -50%)"
        >
          Mix and Master 
        </Text>
      </Box>
    </Box>
  );
}
