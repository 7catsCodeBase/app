"use client"

import { Flex, Box, Input, Button } from "@chakra-ui/react"

export default function Footer() {
    return (
        <Flex bottom="0" w="100%" justifyContent="space-between" p="3.5" bgColor="#333333" px="10" color="white" flexWrap="wrap" >
            <Flex flexDirection="column" gap="4">
                <Flex>USEFUL LINKS</Flex>
                <Flex gap="2.5" fontSize="md" fontWeight="400" justifyContent="space-between">
                    <a>About </a>
                    <a>Services</a>
                </Flex>
                <Flex gap="2.5" fontSize="md" fontWeight="400" justifyContent="space-between">
                    <a>Contact Us </a>
                    <a>Shop</a>
                </Flex>
            </Flex>
            <Flex flexDirection="column" justifyContent="center" alignItems="center" mt={{ base: "2", sm: "4" }}>
                <Input backgroundColor="white" type="text" width='20rem' borderRadius="2xl" placeholder="Your Email address"_placeholder={{ opacity: 1, color: 'gray.900', textAlign: 'center', fontWeight: 'medium' }} mb={{ base: "2", sm: "6" }} />
                <Button variant='outline'width='10rem' colorScheme='white' borderRadius="2xl" border="2.5px solid white" > SUBSCRIBE NOW  </Button>

            </Flex>

            <Box>
                <Flex  flexDirection="column" justifyContent="center" alignItems="center" gap="2.5">
                    <Flex>CONTACT</Flex>
                    <Flex flexDirection="column" justifyContent="space-between">
                        <Flex width="100%">123, XYZ ROAD, BSK3</Flex>
                        <Flex width="100%"> Ameerpet, Telangana</Flex>
                    </Flex>
                </Flex>
            </Box>

        </Flex>
    )
}

