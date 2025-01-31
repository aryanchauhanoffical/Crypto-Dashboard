import { Box, Button, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
const TopNav = ({title,onOpen}) => {
  return (
    <Box px="4" bg="white">
      <HStack mx="auto" maxW="70rem"  h="16" justify="space-between" >
      <Icon as={FaBars} onClick={onOpen} display={
      {
        base:"block",
        lg:"none",
      }
    }/>
      <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
      
      <Menu>
<MenuButton >
  <Icon as={FaCircleUser} fontSize="32px"/>
</MenuButton>
<MenuList>
  <MenuItem>Logout</MenuItem>
  <MenuItem>Support</MenuItem>
</MenuList>
</Menu>
    
  </HStack>
    </Box>
    
  )
}

export default TopNav