import React from 'react'
import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack, Icon, Input, Stack, Text, Textarea } from '@chakra-ui/react';

const ConatctCard = () => {
  return (
    <Card p={"6"} borderRadius={"1rem"} flexGrow={1}>
            <Stack spacing={6}>
            <Text>
                You will receive response within 24 hours of time of Submit.
            </Text>

            <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter Your Name.." />
          </FormControl>
          <FormControl>
            <FormLabel>Surename</FormLabel>
            <Input placeholder="Enter Your Surename.." />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter Your Email.." />
        </FormControl>
        <FormControl>
          <FormLabel>Messagee</FormLabel>
          <Textarea placeholder="Enter Your Message.." />
        </FormControl>
        
        <Checkbox defaultChecked >
            <Text fontSize={"xs"}>
            I agree with
            <Box as={"span"} color={"p.purple"}>
                {" "}
                Terms & Condition
            </Box>
            </Text>
        </Checkbox>
        
        <Stack>
            <Button fontSize={"sm"}>Send a Message</Button>
            <Button fontSize={"sm"} colorScheme={"gray"}>Book a Meeting</Button>
        </Stack>
            </Stack>
        </Card>
  )
}

export default ConatctCard