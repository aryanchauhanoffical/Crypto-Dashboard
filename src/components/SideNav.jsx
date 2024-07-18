import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';
const SideNav = () => {

  const navLinks=[{
    icon:RxDashboard,text:"Dashboard",links:"/"
  },{
    icon:BsArrowDownUp,text:"Transactions",links:"/transactions"
  }]
  return (
    <Stack bg="white" justify="space-between" boxShadow={{base:"none",lg:"lg"}} w={{base:"full",lg:"16rem"}} h="100vh" 
   
    >
      
      <Box>
      <Heading textAlign="center" fontSize="20px" as="h1" pt="56px">@DOSOMECODING</Heading>
      <Box mt="6" mx="3">
      {navLinks.map((nav)=>(
        
        <Link to="/transactions" key={nav.text}>
        <HStack borderRadius="10px" mx="12px"  py="3" px="4" _hover={{
          bg:"#F3F3F7",color:"#171717"
        }}color="#797E82">
          <Icon as={nav.icon}/>
          <Text fontSize="14px" fontWeight="medium" >{nav.text}</Text>
        </HStack>
        </Link>
      ))}
      </Box>
      </Box>


      <Box mt="6" mx="3" mb="6">
      <Link to="/Support">
      <HStack borderRadius="10px" 
              py="3" 
              px="4" _hover={{
              bg:"#F3F3F7",color:"#171717"
        }}color="#797E82">
          <Icon as={BiSupport}/>
          <Text fontSize="14px" fontWeight="medium">Support</Text>
        </HStack>
      </Link>
      </Box>
      
    </Stack>
  )
}

export default SideNav