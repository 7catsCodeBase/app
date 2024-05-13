
import React from 'react';
import {
    Box, Checkbox, Flex, Image, List,
    ListItem,
    ListIcon,
    UnorderedList,
} from "@chakra-ui/react";
import { staticAssets } from "@/Utills/staticAssets";

const CourseCard = () => {
    return (
        <Box bgColor="white" mt="1.5vh" mb="1.5vh">
            <Flex alignItems="center" p="15px" justifyContent="space-between" >
                <Flex alignItems="center" justifyContent="space-between" gap="15px">
                    <Checkbox size='lg' colorScheme='gray'></Checkbox>
                    <Box fontSize="15px" fontFamily="bold">COMPLETE MIX AND MASTER COURSE</Box>
                </Flex>

                <Box fontSize="15px" fontFamily="bold">
                    $500000
                </Box>

            </Flex>
            <Box w="100%" h="35vh" position="relative" display="flex" >
                <Box w="25%" backgroundColor="tomato">
                    <Image boxSize='100%'
                        objectFit='cover'
                        src={staticAssets.course1}
                        alt='Dan Abramov'>

                    </Image>
                </Box>
                <Box w="75%" backgroundColor="#F4F4F4" borderRightRadius="20px">
                    <UnorderedList pl="25px">
                        <ListItem>65+ lectures, 10+ hours of learning</ListItem>
                        <ListItem>1 Live Q&A Session each month for Lifetime</ListItem>
                        <ListItem>Lifetime access to the Course & WhatsApp Community</ListItem>
                        <ListItem>Certificate after Course Completion</ListItem>
                        <ListItem>Topic-wise Assignments & Tests + Book recommendations</ListItem>
                        <ListItem>24x7 Support from the Team</ListItem>
                        <ListItem>A mentor for life</ListItem>
                    </UnorderedList>
                </Box>
            </Box>
        </Box>
    )
}

export default CourseCard